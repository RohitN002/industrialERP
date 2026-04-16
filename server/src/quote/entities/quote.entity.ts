import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateQuoteDto } from '../dto/create-quote.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class QuoteRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createQuote(dto: CreateQuoteDto) {
    return this.prisma.$transaction(async (tx) => {
      // 🔴 1. Validate client exists
      const client = await tx.client.findUnique({
        where: { id: dto.clientId },
        select: { id: true },
      });

      if (!client) {
        throw new Error('Invalid clientId');
      }

      let subTotal = new Prisma.Decimal(0);
      let discountTotal = new Prisma.Decimal(0);
      let taxTotal = new Prisma.Decimal(0);

      const itemsData = dto.items.map((item, index) => {
        const quantity = new Prisma.Decimal(item.quantity);
        const unitPrice = new Prisma.Decimal(item.unitPrice);
        const discount = new Prisma.Decimal(item.discount ?? 0);
        const tax = new Prisma.Decimal(item.tax ?? 0);

        const lineBase = quantity.mul(unitPrice);
        const lineAfterDiscount = lineBase.minus(discount);
        const lineTotal = lineAfterDiscount.plus(tax);

        subTotal = subTotal.plus(lineBase);
        discountTotal = discountTotal.plus(discount);
        taxTotal = taxTotal.plus(tax);

        return {
          productId: item.productId,
          description: item.description,
          quantity,
          unitPrice,
          discount,
          tax,
          lineTotal,
          sortOrder: index,
        };
      });

      const grandTotal = subTotal.minus(discountTotal).plus(taxTotal);

      const quoteCount = await tx.quote.count();
      const quoteNumber = `Q-${new Date().getFullYear()}-${String(
        quoteCount + 1,
      ).padStart(5, '0')}`;

      const quote = await tx.quote.create({
        data: {
          quoteNumber,
          clientId: dto.clientId,
          expiryDate: dto.expiryDate,
          currency: dto.currency ?? 'INR',

          subTotal,
          discountTotal,
          taxTotal,
          grandTotal,

          notes: dto.notes,
          terms: dto.terms,

          items: {
            create: itemsData,
          },
        },
        include: {
          items: true,
        },
      });

      return quote;
    });
  }

  async findOne(id: string) {
    return this.prisma.quote.findUnique({
      where: { id },
      include: {
        items: true,
      },
    });
  }

  async findAll() {
    return this.prisma.quote.findMany({
      include: {
        items: true,
      },
    });
  }

  async updateQuote(id: string, dto: any) {
    return this.prisma.$transaction(async (tx) => {
      // 🔴 1. Validate quote exists
      const validateQuote = await tx.quote.findUnique({
        where: { id },
        select: { id: true },
      });

      if (!validateQuote) {
        throw new Error('Invalid quoteId');
      }

      let subTotal = new Prisma.Decimal(0);
      let discountTotal = new Prisma.Decimal(0);
      let taxTotal = new Prisma.Decimal(0);

      const itemsData = dto.items.map((item, index) => {
        const quantity = new Prisma.Decimal(item.quantity);
        const unitPrice = new Prisma.Decimal(item.unitPrice);
        const discount = new Prisma.Decimal(item.discount ?? 0);
        const tax = new Prisma.Decimal(item.tax ?? 0);

        const lineBase = quantity.mul(unitPrice);
        const lineAfterDiscount = lineBase.minus(discount);
        const lineTotal = lineAfterDiscount.plus(tax);

        subTotal = subTotal.plus(lineBase);
        discountTotal = discountTotal.plus(discount);
        taxTotal = taxTotal.plus(tax);

        return {
          productId: item.productId,
          description: item.description,
          quantity,
          unitPrice,
          discount,
          tax,
          lineTotal,
          sortOrder: index,
        };
      });

      const grandTotal = subTotal.minus(discountTotal).plus(taxTotal);

      const quote = await tx.quote.update({
        where: { id },
        data: {
          clientId: dto.clientId,
          expiryDate: dto.expiryDate,
          currency: dto.currency ?? 'INR',

          subTotal,
          discountTotal,
          taxTotal,
          grandTotal,

          notes: dto.notes,
          terms: dto.terms,

          items: {
            create: itemsData,
          },
        },
        include: {
          items: true,
        },
      });

      return quote;
    });
  }
  async removeQuote(id: string) {
    return this.prisma.quote.delete({
      where: { id },
    });
  }
}
