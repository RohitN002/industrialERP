import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeRepository } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(private readonly EmployeeRepo: EmployeeRepository) { }
  async create(createEmployeeDto: CreateEmployeeDto) {
    const existingEmployee = await this.EmployeeRepo.findOne(createEmployeeDto.userId);
    if (existingEmployee) {
      throw new Error('Employee already exists');
    }

    const newEmployee = await this.EmployeeRepo.create(createEmployeeDto);
    return newEmployee;
  }

  async findAll() {
    const allEmployees = await this.EmployeeRepo.findAll();
    return allEmployees;
  }

  async findOne(id: string) {
    const employee = await this.EmployeeRepo.findOne(id);
    return employee;
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    const updatedEmployee = await this.EmployeeRepo.update(id, updateEmployeeDto);
    return updatedEmployee;
  }

  async remove(id: string) {
    const removedEmployee = await this.EmployeeRepo.remove(id);
    return removedEmployee;
  }
}
