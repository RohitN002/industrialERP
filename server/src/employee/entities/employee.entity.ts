import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Employee } from "@prisma/client";

@Injectable()
export class EmployeeRepository {
    constructor(private prisma: PrismaService) { }

    async create(data: any) {
        return this.prisma.employee.create({ data });
    }

    async findAll() {
        return this.prisma.employee.findMany();
    }

    async findOne(id: string) {
        return this.prisma.employee.findUnique({ where: { id } });
    }

    async update(id: string, data: any) {
        return this.prisma.employee.update({ where: { id }, data });
    }

    async remove(id: string) {
        return this.prisma.employee.delete({ where: { id } });
    }
}
