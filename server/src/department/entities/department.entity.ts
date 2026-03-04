import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class DepartmentRepository {
    constructor(private prisma: PrismaService) { }

    async create(data: any) {
        return this.prisma.department.create({ data });
    }

    async findAll() {
        return this.prisma.department.findMany();
    }

    async findOne(id: string) {
        return this.prisma.department.findUnique({ where: { id } });
    }

    async update(id: string, data: any) {
        return this.prisma.department.update({ where: { id }, data });
    }

    async remove(id: string) {
        return this.prisma.department.delete({ where: { id } });
    }
}
