import { Injectable } from '@nestjs/common';
import { CreateLeadDto } from '../dto/create-lead.dto';

import { PrismaService } from 'src/prisma/prisma.service';
import { Lead } from '@prisma/client'
@Injectable()
export class LeadEntity {
    constructor(private prisma: PrismaService) { }

    async create(data: any) {
        return this.prisma.lead.create({ data });
    }

    async findAll() {
        return this.prisma.lead.findMany({
            include: { assignedTo: true, createdBy: true },
            orderBy: { createdAt: 'desc' },
        });
    }

    async findOne(id: string) {
        return this.prisma.lead.findUnique({
            where: { id },
            include: { assignedTo: true, createdBy: true },
        });
    }

    async update(id: string, data: any) {
        return this.prisma.lead.update({
            where: { id },
            data,
        });
    }

    async remove(id: string) {
        return this.prisma.lead.delete({
            where: { id },
        });
    }
}
