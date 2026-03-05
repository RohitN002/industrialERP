import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { DepartmentRepository } from './entities/department.entity';

@Module({
  controllers: [DepartmentController],
  providers: [DepartmentService, DepartmentRepository],
})
export class DepartmentModule {}
