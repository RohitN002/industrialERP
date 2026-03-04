import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AttendanceRepository {
    constructor(private prisma: PrismaService) { }

    async create(data: any) {
        return this.prisma.attendance.create({ data });
    }

    async findAll() {
        return this.prisma.attendance.findMany();
    }

    async findOne(id: string) {
        return this.prisma.attendance.findUnique({ where: { id } });
    }

    async update(id: string, data: any) {
        return this.prisma.attendance.update({ where: { id }, data });
    }

    async remove(id: string) {
        return this.prisma.attendance.delete({ where: { id } });
    }
}
