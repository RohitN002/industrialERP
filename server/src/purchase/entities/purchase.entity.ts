import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PurchaseRepository {
    constructor(private prisma: PrismaService) { }

    async create(data: any) {
        return this.prisma.purchase.create({ data });
    }

    async findAll() {
        return this.prisma.purchase.findMany();
    }

    async findOne(id: string) {
        return this.prisma.purchase.findUnique({ where: { id } });
    }

    async update(id: string, data: any) {
        return this.prisma.purchase.update({ where: { id }, data });
    }

    async remove(id: string) {
        return this.prisma.purchase.delete({ where: { id } });
    }
}
