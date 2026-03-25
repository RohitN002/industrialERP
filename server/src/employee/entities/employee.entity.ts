import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class EmployeeRepository {
    constructor(private readonly prisma: PrismaService) { }

  async create(data: any) {
  return this.prisma.$transaction(async (tx) => {
    // 1. Create User
    const user = await tx.user.create({
      data: {
        email: data.email,
        passwordHash: data.passwordHash,
        name: data.name,
      },
    });

    // 2. Get EMPLOYEE role
    const role = await tx.role.findUnique({
      where: { name: 'EMPLOYEE' },
    });

    if (!role) {
      throw new Error('EMPLOYEE role not found');
    }

    // 3. Assign role to user
    await tx.userRole.create({
      data: {
        userId: user.id,
        roleId: role.id,
      },
    });

    // 4. Create Employee linked to user
    const employee = await tx.employee.create({
      data: {
        userId: user.id,
        designation: data.designation,
        department: data.department,
      },
      include: {
        user: {
          include: {
            roles: {
              include: { role: true },
            },
          },
        },
      },
    });

    return employee;
  });
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
