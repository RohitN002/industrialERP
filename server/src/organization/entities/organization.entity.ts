import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrganizationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createOrganization(data, id) {
    const org = await this.prisma.organization.create({ data });
    return org;
  }
  async update(id: string, data) {
    return this.prisma.organization.update({ where: { id }, data });
  }
  async findById(id) {
    return this.prisma.organization.findUnique({ where: { id } });
  }
  async findAllIndustries() {
    return this.prisma.industries.findMany();
  }
  async find() {}
}
