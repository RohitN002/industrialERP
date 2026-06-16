import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class Organization {
  constructor(private readonly prisma: PrismaService) {}

  async create(data) {
    return this.prisma.organization.create({ data });
  }
}
