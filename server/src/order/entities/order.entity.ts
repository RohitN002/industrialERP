import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: any) {
    const { items, clientId, ...rest } = dto;

    if (!clientId) throw new Error('clientId is required to create an order');

    return await this.prisma.$transaction(async (tx: any) => {
      // 1️⃣ Fetch the Lead for billing info
      const client = await tx.client.findUnique({
        where: { id: clientId },
      });
      if (!client) throw new Error('Client not found');

      let subTotal = 0;
      let totalTax = 0;
      let totalDiscount = 0;

      const orderItems = items.map((item) => {
        const itemSubTotal = item.unitPrice * item.quantity;

        subTotal += itemSubTotal;
        totalDiscount += item.discount || 0;
        totalTax += item.tax || 0;

        return {
          productId: item.productId,
          quantity: item.quantity,
          unitPrice: item.unitPrice,
          discount: item.discount || 0,
          tax: item.tax || 0,
          total: itemSubTotal - (item.discount || 0) + (item.tax || 0),
        };
      });

      const totalAmount = subTotal - totalDiscount + totalTax;

      // 3️⃣ Create order with lead billing info
      const order = await tx.order.create({
        data: {
          ...rest,
          clientId: clientId, // link to lead

          subTotal,
          totalDiscount,
          totalTax,
          totalAmount,

          // Pull billing from Lead
          billingAddress: client.address,

          shippingAddress: dto.shippingAddress,
          shippingCity: dto.shippingCity,
          shippingState: dto.shippingState,
          shippingCountry: dto.shippingCountry,
          shippingPincode: dto.shippingPincode,
          shippingContact: dto.shippingContact,
          shippingPhone: dto.contactPersonPhone,

          items: {
            create: orderItems,
          },
        },
        include: {
          items: true,
        },
      });

      return order;
    });
  }
  async findAll(query?: { status?: string; clientId?: string }) {
    return this.prisma.order.findMany({
      where: {
        ...(query?.status && { status: query.status }),
        ...(query?.clientId && { clientId: query.clientId }),
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
        client: true,
        assignedTo: true,
        createdBy: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
  async findOne(id: string) {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: {
        items: {
          include: {
            product: true,
          },
        },
        client: true,
        assignedTo: true,
        createdBy: true,
      },
    });

    return order;
  }
  async update(id: string, dto: any) {
    const { items, ...rest } = dto;

    return this.prisma.$transaction(async (tx) => {
      // ✅ Recalculate totals
      let subTotal = 0;

      const newItems = items.map((item) => {
        const total = item.unitPrice * item.quantity;
        subTotal += total;

        return {
          productId: item.productId,
          quantity: item.quantity,
          unitPrice: item.unitPrice,
          total,
        };
      });

      const totalAmount = subTotal;

      // ✅ Delete old items
      await tx.orderItem.deleteMany({
        where: { orderId: id },
      });

      // ✅ Update order + recreate items
      const updatedOrder = await tx.order.update({
        where: { id },
        data: {
          ...rest,
          subTotal,
          totalAmount,

          items: {
            create: newItems,
          },
        },
        include: {
          items: true,
        },
      });

      return updatedOrder;
    });
  }
  async remove(id: string) {
    return this.prisma.$transaction(async (tx) => {
      // Optional: check existence
      const order = await tx.order.findUnique({
        where: { id },
      });

      // Items auto-delete بسبب Cascade, but safe cleanup:
      await tx.orderItem.deleteMany({
        where: { orderId: id },
      });

      return tx.order.delete({
        where: { id },
      });
    });
  }
}
