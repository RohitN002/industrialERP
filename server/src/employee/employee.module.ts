import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { EmployeeRepository } from './entities/employee.entity';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeeRepository],
})
export class EmployeeModule {}
