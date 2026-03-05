import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class SalesRepository {
    constructor(private prisma: PrismaService) { }

    async create(data: any) {
        return this.prisma.sale.create({ data });
    }

    async findAll() {
        return this.prisma.sale.findMany();
    }

    async findOne(id: string) {
        return this.prisma.sale.findUnique({ where: { id } });
    }

    async update(id: string, data: any) {
        return this.prisma.sale.update({ where: { id }, data });
    }

    async remove(id: string) {
        return this.prisma.sale.delete({ where: { id } });
    }
}
