import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { DepartmentRepository } from './entities/department.entity';

@Injectable()
export class DepartmentService {
  constructor(private departmentRepository: DepartmentRepository) { }
  async create(createDepartmentDto: CreateDepartmentDto) {
    const existingDepartment = await this.departmentRepository.findOne(createDepartmentDto.name);
    if (existingDepartment) {
      throw new Error('Department already exists');
    }
    const newDepartment = await this.departmentRepository.create(createDepartmentDto);
    return newDepartment;
  }

  async findAll() {
    const departments = await this.departmentRepository.findAll();
    if (!departments) {
      throw new Error('Department not found');
    }
    return departments;
  }

  async findOne(id: string) {
    const department = await this.departmentRepository.findOne(id);
    if (!department) {
      throw new Error('Department not found');
    }
    return department;
  }

  update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    return `This action updates a #${id} department`;
  }

  remove(id: string) {
    return `This action removes a #${id} department`;
  }
}
