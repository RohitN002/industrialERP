import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role, RoleType } from '@prisma/client';

@Injectable()
export class RoleRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    return this.prisma.role.create({ data });
  }
  async find(name: string) {
    return this.prisma.role.findUnique({
      where: {
        name: RoleType[name as keyof typeof RoleType],
      },
    });
  }

  async findAll() {
    return this.prisma.role.findMany();
  }

  async findOne(id: string) {
    return this.prisma.role.findUnique({ where: { id } });
  }

  async update(id: string, data: any) {
    return this.prisma.role.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.role.delete({ where: { id } });
  }
}
