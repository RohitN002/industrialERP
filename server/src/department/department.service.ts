import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { DepartmentRepository } from './entities/department.entity';

@Injectable()
export class DepartmentService {
  constructor(private departmentRepository: DepartmentRepository) {}
  async create(createDepartmentDto: CreateDepartmentDto) {
    const existingDepartment = await this.departmentRepository.findOne(
      createDepartmentDto.name,
    );
    if (existingDepartment) {
      throw new Error('Department already exists');
    }
    const newDepartment =
      await this.departmentRepository.create(createDepartmentDto);
    return { message: 'department created successfully', data: newDepartment };
  }

  async findAll() {
    const departments = await this.departmentRepository.findAll();
    if (!departments) {
      throw new Error('Department not found');
    }
    return { message: 'departments fetched successfully', data: departments };
  }

  async findOne(id: string) {
    const department = await this.departmentRepository.findOne(id);
    if (!department) {
      throw new Error('Department not found');
    }
    return { message: 'department fetched successfully', data: department };
  }

  async update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    const existingDepartment = await this.departmentRepository.findOne(id);
    if (!existingDepartment) {
      throw new Error('Department not found');
    }
    const updatedDepartment = await this.departmentRepository.update(
      id,
      updateDepartmentDto,
    );
    return {
      message: 'department updated successfully',
      data: updatedDepartment,
    };
  }

  async remove(id: string) {
    const existingDepartment = await this.departmentRepository.findOne(id);
    if (!existingDepartment) {
      throw new Error('Department not found');
    }
    const deletedDepartment = await this.departmentRepository.remove(id);
    return {
      message: 'department deleted successfully',
      data: deletedDepartment,
    };
  }
}
