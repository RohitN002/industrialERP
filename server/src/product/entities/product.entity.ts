import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProductDto } from "../dto/create-product.dto";
import { UpdateProductDto } from "../dto/update-product.dto";

@Injectable()
export class ProductRepository {
    constructor(
        private readonly prisma: PrismaService,
    ) {}

    async create(createProductDto: CreateProductDto) {
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

    async update(id: string, updateProductDto: UpdateProductDto) {
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
