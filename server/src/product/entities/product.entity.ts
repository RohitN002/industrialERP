import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProductDto } from "../dto/create-product.dto";


@Injectable()
export class ProductRepository {
    constructor(
        private readonly prisma: PrismaService,
    ) {}

  async create(createProductDto: CreateProductDto) {
  const { categoryId, supplierId, ...rest } = createProductDto;

  return this.prisma.product.create({
    data: {
      ...rest,

      category: {
        connect: { id: categoryId },
      },
      ...(supplierId && {
        supplier: {
          connect: { id: supplierId },
        },
      }),
    },
    include: {
      category: true,
      supplier: true,
    },
  });
}
async findBySku(sku: string) {
    return this.prisma.product.findUnique({
        where: { sku },
    });
}
    async findAll() {
        return this.prisma.product.findMany({
          include: {
            category: true,
            supplier: true,
          },
        });
    }

    async findOne(id: string) {
        return this.prisma.product.findUnique({
            where: { id },
            include: {
              category: true,
              supplier: true,
            },
        });
    }

    async update(id: string, updateProductDto: any) {
        return this.prisma.product.update({
            where: { id },
            data: updateProductDto,
            include: {
              category: true,
              supplier: true,
            },
        });
    }

    async remove(id: string) {
        return this.prisma.product.delete({
            where: { id },
        });
    }
}
