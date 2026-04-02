import { Injectable } from '@nestjs/common';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { AttendanceRepository } from './entities/attendance.entity';

@Injectable()
export class AttendanceService {
  constructor(private readonly attendanceRepository: AttendanceRepository) {}

  async create(createAttendanceDto: CreateAttendanceDto) {
    const existingAttendance = await this.attendanceRepository.findOne(
      createAttendanceDto.userId,
    );
    if (existingAttendance) {
      throw new Error('Attendance already exists');
    }
    const newAttendance =
      await this.attendanceRepository.create(createAttendanceDto);
    return { message: 'Attendance created successfully', data: newAttendance };
  }
  async createBulk(createAttendanceDto: CreateAttendanceDto[]) {
    const newAttendance =
      await this.attendanceRepository.createBulk(createAttendanceDto);
    return { message: 'User data created Sucessfully', data: newAttendance };
  }
  async findAll() {
    const attendances = await this.attendanceRepository.findAll();
    // if (!attendances) {
    //   throw new Error('Attendance not found');
    // }
    return {
      message: 'Attendance details fetched successfully',
      data: attendances,
    };
  }
  async findMonthlyAttendance(month: number, year: number) {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', month, year);
    const Attendance =
      await this.attendanceRepository.findMonthlyAttendanceGrouped(month, year);
    // if (!Attendance) {
    //   throw new Error('Attendance not found');
    // }
    return {
      message: 'Attendance details fetched successfully',
      data: Attendance,
    };
  }
  async findDayAttendance(userId, date) {
    await this.attendanceRepository.attendanceDetails(userId, date);
  }
  async findOne(id: string) {
    const attendance = await this.attendanceRepository.findOne(id);
    if (!attendance) {
      throw new Error('Attendance not found');
    }
    return { message: 'Attendance found successfully', data: attendance };
  }

  async update(id: string, updateAttendanceDto: UpdateAttendanceDto) {
    const attendance = await this.attendanceRepository.findOne(id);
    if (!attendance) {
      throw new Error('Attendance not found');
    }
    const updatedAttendance = await this.attendanceRepository.update(
      id,
      updateAttendanceDto,
    );
    return {
      message: 'Attendance updated successfully',
      data: updatedAttendance,
    };
  }

  async remove(id: string) {
    const attendance = await this.attendanceRepository.findOne(id);
    if (!attendance) {
      throw new Error('Attendance not found');
    }
    const deletedAttendance = await this.attendanceRepository.remove(id);
    return {
      message: 'Attendance deleted successfully',
      data: deletedAttendance,
    };
  }
}
