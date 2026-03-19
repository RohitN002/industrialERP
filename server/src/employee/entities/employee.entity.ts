import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Employee } from "@prisma/client";

@Injectable()
export class EmployeeRepository {
    constructor(private prisma: PrismaService) { }

    async create(data: any) {
        return this.prisma.employee.create({ data, include: { user: true } });
    }

    async findByUserId(userId: string) {
        return this.prisma.employee.findUnique({ where: { userId }, include: { user: true } });
    }

    async findAll() {
        return this.prisma.employee.findMany({ include: { user: true } });
    }

    async findOne(id: string) {
        return this.prisma.employee.findUnique({ where: { id }, include: { user: true } });
    }

    async update(id: string, data: any) {
        return this.prisma.employee.update({ where: { id }, data, include: { user: true } });
    }

    async remove(id: string) {
        return this.prisma.employee.delete({ where: { id } });
    }
}
