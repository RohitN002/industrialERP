import { Injectable } from '@nestjs/common';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { AttendanceRepository } from './entities/attendance.entity';

@Injectable()
export class AttendanceService {
  constructor(
    private readonly attendanceRepository: AttendanceRepository
  ) { }
  async create(createAttendanceDto: CreateAttendanceDto) {
    const existingAttendance = await this.attendanceRepository.findOne(createAttendanceDto.userId);
    if (existingAttendance) {
      throw new Error('Attendance already exists');
    }
    const newAttendance = await this.attendanceRepository.create(createAttendanceDto);
    return newAttendance;
  }

  async findAll() {
    const attendances = await this.attendanceRepository.findAll();
    if (!attendances) {
      throw new Error('Attendance not found');
    }
    return attendances;
  }

  async findOne(id: string) {
    const attendance = await this.attendanceRepository.findOne(id);
    if (!attendance) {
      throw new Error('Attendance not found');
    }
    return attendance;
  }

  async update(id: string, updateAttendanceDto: UpdateAttendanceDto) {
    const attendance = await this.attendanceRepository.findOne(id);
    if (!attendance) {
      throw new Error('Attendance not found');
    }
    const updatedAttendance = await this.attendanceRepository.update(id, updateAttendanceDto);
    return updatedAttendance;
  }

  async remove(id: string) {
    const attendance = await this.attendanceRepository.findOne(id);
    if (!attendance) {
      throw new Error('Attendance not found');
    }
    const deletedAttendance = await this.attendanceRepository.remove(id);
    return deletedAttendance;
  }
}
