import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeRepository } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(private readonly EmployeeRepo: EmployeeRepository) {}
  async create(createEmployeeDto: CreateEmployeeDto) {
    const existingEmployee = await this.EmployeeRepo.findByUserId(
      createEmployeeDto.email,
    );
    console.log('exisitng employee', existingEmployee);
    if (existingEmployee) {
      throw new Error('Employee profile already exists for this user');
    }

    const newEmployee = await this.EmployeeRepo.create(createEmployeeDto);
    console.log('new employee', newEmployee);
    return { message: 'Employee created successfully', data: newEmployee };
  }

  async findAll() {
    const allEmployees = await this.EmployeeRepo.findAll();
    return { message: 'Employees fetched successfully', data: allEmployees };
  }

  async findOne(id: string) {
    const employee = await this.EmployeeRepo.findOne(id);
    return { message: 'Employee fetched successfully', data: employee };
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    const updatedEmployee = await this.EmployeeRepo.update(
      id,
      updateEmployeeDto,
    );
    return { message: 'Employee updated successfully', data: updatedEmployee };
  }

  async remove(id: string) {
    const removedEmployee = await this.EmployeeRepo.remove(id);
    return { message: 'Employee deleted successfully', data: removedEmployee };
  }
}
