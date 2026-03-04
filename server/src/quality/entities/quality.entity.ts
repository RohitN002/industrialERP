import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class QualityRepository {
    constructor(private prisma: PrismaService) { }

    async create(data: any) {
        return this.prisma.qualityInspection.create({ data });
    }

    async findAll() {
        return this.prisma.qualityInspection.findMany();
    }

    async findOne(id: string) {
        return this.prisma.qualityInspection.findUnique({ where: { id } });
    }

    async update(id: string, data: any) {
        return this.prisma.qualityInspection.update({ where: { id }, data });
    }

    async remove(id: string) {
        return this.prisma.qualityInspection.delete({ where: { id } });
    }
}
