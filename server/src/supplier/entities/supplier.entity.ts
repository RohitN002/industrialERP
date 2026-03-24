import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class SupplierRepository {
    constructor(private readonly prisma: PrismaService) {}

    async createSupplier(userId: string,phone: string, address: string) {
        return this.prisma.supplier.create({
            data: {
                userId,
                phone,
                address,
            },
        });
    }

    async findAllSuppliers() {
        return this.prisma.supplier.findMany();
    }
async findSupplierByUserId(userId: string) {
    return this.prisma.supplier.findUnique({
        where: { userId },
    });
}
    async findSupplierById(id: string) {
        return this.prisma.supplier.findUnique({
            where: { id },
        });
    }

async updateSupplier(id: string, phone?: string, address?: string) {
    return this.prisma.supplier.update({
        where: { id },
        data: {
            ...(phone && { phone }),
            ...(address && { address }),
        },
    });
}

    async deleteSupplier(id: string) {
        return this.prisma.supplier.delete({
            where: { id },
        });
    }
}
