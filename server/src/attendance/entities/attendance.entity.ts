import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAttendanceDto } from '../dto/create-attendance.dto';
import { AttendanceStatus } from '@prisma/client';

@Injectable()
export class AttendanceRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAttendanceDto) {
    const checkIn = data.checkIn ? new Date(data.checkIn) : null;
    const checkOut = data.checkOut ? new Date(data.checkOut) : null;

    const workedMinutes =
      checkIn && checkOut
        ? (checkOut.getTime() - checkIn.getTime()) / (1000 * 60)
        : 0;
    const workedHours = workedMinutes / 60;
    const normalizedDate = new Date(data.date);
    normalizedDate.setHours(0, 0, 0, 0);

    return this.prisma.attendance.create({
      data: {
        userId: data.userId,
        date: normalizedDate,

        status: data.status as AttendanceStatus,

        checkIn: data.checkIn,
        checkOut: data.checkOut,
        workedHours: workedHours,
        workedMinutes: workedMinutes,
      },
    });
  }

  async createBulk(data: CreateAttendanceDto[]) {
    return this.prisma.attendance.createMany({
      data: data.map((item) => {
        const checkIn = item.checkIn ? new Date(item.checkIn) : null;
        const checkOut = item.checkOut ? new Date(item.checkOut) : null;

        const workedMinutes =
          checkIn && checkOut
            ? (checkOut.getTime() - checkIn.getTime()) / (1000 * 60)
            : 0;

        const workedHours = workedMinutes / 60;

        return {
          userId: item.userId,
          date: new Date(item.date),
          status: item.status as AttendanceStatus,
          checkIn,
          checkOut,
          workedMinutes,
          workedHours,
        };
      }),
    });
  }
  async findAll() {
    return this.prisma.attendance.findMany({
      include: {
        employee: {
          select: {
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });
  }
  async findMonthlyAttendanceGrouped(month: number, year: number) {
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);

    const records = await this.prisma.attendance.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      select: {
        date: true,
        status: true,
        employee: {
          select: {
            id: true,
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
      orderBy: {
        date: 'asc',
      },
    });

    // Grouping
    const grouped = records.reduce((acc, record) => {
      const empId = record.employee.id;

      if (!acc[empId]) {
        acc[empId] = {
          employeeId: empId,
          name: record.employee.user.name,
          email: record.employee.user.email,
          attendance: [],
          totalPresentDays: 0,
          totalAbsentDays: 0,
          totalHalfDays: 0,
          totalLeaveDays: 0,
          totalLateDays: 0,
        };
      }

      acc[empId].attendance.push({
        date: record.date,
        status: record.status,
      });

      if (record.status === 'PRESENT') {
        acc[empId].totalPresentDays += 1;
      }
      if (record.status === 'ABSENT') {
        acc[empId].totalAbsentDays += 1;
      }
      if (record.status === 'HALF_DAY') {
        acc[empId].totalHalfDays += 1;
      }
      if (record.status === 'ON_LEAVE') {
        acc[empId].totalLeaveDays += 1;
      }
      if (record.status === 'LATE') {
        acc[empId].totalLateDays += 1;
      }
      return acc;
    }, {});

    return Object.values(grouped);
  }
  async findOne(id: string) {
    return this.prisma.attendance.findUnique({
      where: { id },
      include: {
        employee: {
          select: {
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.attendance.update({ where: { id }, data });
  }

  async remove(id: string) {
    return this.prisma.attendance.delete({ where: { id } });
  }
}
