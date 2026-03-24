import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class ProductRepository {
    constructor(
        private readonly prisma: PrismaService,
    ) {}

    async create(createProductDto: any) {
        return this.prisma.product.create({
            data: createProductDto,
        });
    }
async findBySku(sku: string) {
    return this.prisma.product.findUnique({
        where: { sku },
    });
}
    async findAll() {
        return this.prisma.product.findMany();
    }

    async findOne(id: string) {
        return this.prisma.product.findUnique({
            where: { id },
        });
    }

    async update(id: string, updateProductDto: any) {
        return this.prisma.product.update({
            where: { id },
            data: updateProductDto,
        });
    }

    async remove(id: string) {
        return this.prisma.product.delete({
            where: { id },
        });
    }
}
