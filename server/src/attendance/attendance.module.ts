import { Module } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { AttendanceController } from './attendance.controller';
import { AttendanceRepository } from './entities/attendance.entity';

@Module({
  controllers: [AttendanceController],
  providers: [AttendanceService, AttendanceRepository],
})
export class AttendanceModule {}
