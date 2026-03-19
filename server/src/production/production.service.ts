import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductionDto } from './dto/create-production.dto';
import { UpdateProductionDto } from './dto/update-production.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, createProductionDto: CreateProductionDto) {
    const employee = await this.prisma.employee.findUnique({
      where: { userId }
    });

    if (!employee) {
      throw new NotFoundException('Employee profile not found for the logged in user');
    }

    return this.prisma.production.create({
      data: {
        batchNo: createProductionDto.batchNo,
        status: createProductionDto.status || 'PLANNED',
        producedProductId: createProductionDto.producedProductId,
        createdById: employee.id,
        items: {
          create: createProductionDto.items.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
          }))
        }
      },
      include: {
        items: {
          include: {
            product: true
          }
        },
        producedProduct: true,
        createdBy: {
          include: {
             user: true
          }
        }
      }
    });
  }

  findAll() {
    return this.prisma.production.findMany({
      include: {
        items: {
          include: {
            product: true
          }
        },
        producedProduct: true,
        createdBy: {
           include: { user: true }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
  }

  findOne(id: string) {
    return this.prisma.production.findUnique({
      where: { id },
      include: {
        items: {
          include: {
            product: true
          }
        },
        producedProduct: true,
        createdBy: {
           include: { user: true }
        }
      }
    });
  }

  async update(id: string, updateProductionDto: UpdateProductionDto) {
    if (updateProductionDto.items) {
      await this.prisma.productionItem.deleteMany({
        where: { productionId: id }
      });
    }

    return this.prisma.production.update({
      where: { id },
      data: {
        batchNo: updateProductionDto.batchNo,
        status: updateProductionDto.status as any,
        producedProductId: updateProductionDto.producedProductId,
        ...(updateProductionDto.items && {
          items: {
            create: updateProductionDto.items.map(item => ({
              productId: item.productId,
              quantity: item.quantity,
            }))
          }
        })
      },
      include: {
        items: {
          include: { product: true }
        },
        producedProduct: true,
        createdBy: {
          include: { user: true }
        }
      }
    });
  }

  remove(id: string) {
    return this.prisma.production.delete({
      where: { id }
    });
  }
}
