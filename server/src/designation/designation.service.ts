import { Injectable } from '@nestjs/common';
import { CreateDesignationDto } from './dto/create-designation.dto';
import { UpdateDesignationDto } from './dto/update-designation.dto';
import { DesignationRepository } from './entities/designation.entity';

@Injectable()
export class DesignationService {
  constructor(private designationRepository: DesignationRepository) {}
  async create(createDesignationDto: CreateDesignationDto) {
    const existingDesignation = await this.designationRepository.findOne(
      createDesignationDto.name,
    );
    if (existingDesignation) {
      throw new Error('Designation already exists');
    }
    const newDesignation =
      await this.designationRepository.create(createDesignationDto);
    return {
      message: 'Designation created successfully',
      data: newDesignation,
    };
  }

  async findAll() {
    const designations = await this.designationRepository.findAll();
    if (!designations) {
      throw new Error('Designation not found');
    }
    return { message: 'Designation found successfully', data: designations };
  }

  async findOne(id: string) {
    const designation = await this.designationRepository.findOne(id);
    if (!designation) {
      throw new Error('Designation not found');
    }
    return { message: 'Designation found successfully', data: designation };
  }

  async update(id: string, updateDesignationDto: UpdateDesignationDto) {
    const Designation = await this.designationRepository.findOne(id);
    if (!Designation) {
      throw new Error('Designation not found');
    }
    const updatedDesignation = await this.designationRepository.update(
      id,
      updateDesignationDto,
    );
    return {
      message: 'Designation updated successfully',
      data: updatedDesignation,
    };
  }

  async remove(id: string) {
    const Designation = await this.designationRepository.findOne(id);
    if (!Designation) {
      throw new Error('Designation not found');
    }
    const deletedDesignation = await this.designationRepository.remove(id);
    return {
      message: 'Designation deleted successfully',
      data: deletedDesignation,
    };
  }
}
