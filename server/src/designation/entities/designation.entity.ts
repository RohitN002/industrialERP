import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class DesignationRepository {
    constructor(private prisma: PrismaService) { }

    async create(data: any) {
        return this.prisma.designation.create({ data });
    }

    async findAll() {
        return this.prisma.designation.findMany();
    }

    async findOne(id: string) {
        return this.prisma.designation.findUnique({ where: { id } });
    }

    async update(id: string, data: any) {
        return this.prisma.designation.update({ where: { id }, data });
    }

    async remove(id: string) {
        return this.prisma.designation.delete({ where: { id } });
    }
}
