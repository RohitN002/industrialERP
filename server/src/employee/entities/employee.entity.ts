import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class EmployeeRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: any) {
    const password = 'employee123';
    const hash = await bcrypt.hash(password, 10);
    return this.prisma.$transaction(async (tx) => {
      // 1. Create User
      const user = await tx.user.create({
        data: {
          email: data.email,
          passwordHash: hash,
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
      const designation = await tx.designation.findUnique({
        where: { id: data.designationId },
      });
      const department = await tx.department.findUnique({
        where: { id: data.departmentId },
      });
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
          fatherName: data.fatherName,
          motherName: data.motherName,
          mobileNumber: data.mobileNumber,
          contactPerson: data.contactPerson,
          contactPersonPhone: data.contactPersonPhone,
          dateOfBirth: data.dateOfBirth,
          gender: data.gender,
          address: data.address,
          city: data.city,
          state: data.state,
          country: data.country,
          pincode: data.pincode,

          designationId: data.designationId,
          departmentId: data.departmentId,
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
    return this.prisma.employee.findUnique({
      where: { userId },
      include: { user: true },
    });
  }

  async findAll() {
    const employees = await this.prisma.employee.findMany({
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

    // Transform to match frontend expectations
    return employees.map((emp) => ({
      id: emp.id,
      name: emp.user.name,
      email: emp.user.email,
      mobileNumber: emp.mobileNumber,
      dateOfBirth: emp.dateOfBirth,
      gender: emp.gender,
      address: emp.address,
      designationId: emp.designationId,
      departmentId: emp.departmentId,
      fatherName: emp.fatherName,
      motherName: emp.motherName,
      contactPerson: emp.contactPerson,
      contactPersonPhone: emp.contactPersonPhone,
      pincode: emp.pincode,
      country: emp.country,
      state: emp.state,
      city: emp.city,
      // Add other fields as needed
    }));
  }

  async findOne(id: string) {
    const employee = await this.prisma.employee.findUnique({
      where: { id },
      include: { user: true },
    });
    if (!employee) {
      throw new Error('Employee not found');
    }
    return {
      id: employee.id,
      name: employee.user.name,
      email: employee.user.email,
      mobileNumber: employee.mobileNumber,
      dateOfBirth: employee.dateOfBirth,
      gender: employee.gender,
      address: employee.address,
      designationId: employee.designationId,
      departmentId: employee.departmentId,
      fatherName: employee.fatherName,
      motherName: employee.motherName,
      contactPerson: employee.contactPerson,
      contactPersonPhone: employee.contactPersonPhone,
      pincode: employee.pincode,
      country: employee.country,
      state: employee.state,
      city: employee.city,
    };
  }

  async update(id: string, data: any) {
    const updateEmployee = await this.prisma.employee.update({
      where: { id },
      data: {
        mobileNumber: data.mobileNumber,
        fatherName: data.fatherName,
        motherName: data.motherName,
        address: data.address,
        city: data.city,
        state: data.state,
        pincode: data.pincode,
        country: data.country,
        contactPerson: data.contactPerson,
        contactPersonPhone: data.contactPersonPhone,
        gender: data.gender,
        dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth) : undefined,
        departmentId: data.departmentId,
        designationId: data.designationId,

        // ✅ THIS IS WHAT YOU ARE MISSING
        user: {
          update: {
            name: data.name,
            email: data.email,
          },
        },
      },
      include: { user: true },
    });

    return updateEmployee;
  }

  async remove(id: string) {
    const employee = await this.prisma.employee.findUnique({
      where: { id },
    });

    if (!employee) {
      throw new Error('Employee not found');
    }

    await this.prisma.$transaction([
      this.prisma.employee.delete({
        where: { id },
      }),
      this.prisma.user.delete({
        where: { id: employee.userId },
      }),
    ]);

    return { message: 'Employee and user deleted successfully' };
  }
}
