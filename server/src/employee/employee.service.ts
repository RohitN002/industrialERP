import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeRepository } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(private readonly EmployeeRepo: EmployeeRepository) { }
  async create(createEmployeeDto: CreateEmployeeDto) {
    return this.EmployeeRepo.create(createEmployeeDto);
  }

  async findAll() {
    return this.EmployeeRepo.findAll();
  }

  async findOne(id: string) {
    return this.EmployeeRepo.findOne(id);
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    return this.EmployeeRepo.update(id, updateEmployeeDto);
  }

  async remove(id: string) {
    return this.EmployeeRepo.remove(id);
  }
}
