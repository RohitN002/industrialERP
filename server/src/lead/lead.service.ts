import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { LeadRepository } from './entities/lead.entity';

@Injectable()
export class LeadService {
  constructor(private leadEntity: LeadRepository) { }

  async create(createLeadDto: CreateLeadDto) {
    const existingLead = await this.leadEntity.findOne(createLeadDto.name);
    if (existingLead) {
      throw new Error('Lead already exists');
    }
    const newLead = await this.leadEntity.create(createLeadDto);
    return newLead;
  }

  async findAll() {
    const leads = await this.leadEntity.findAll();
    if (!leads) {
      throw new Error('Lead not found');
    }
    return leads;
  }

  async findOne(id: string) {
    const lead = await this.leadEntity.findOne(id);
    if (!lead) {
      throw new NotFoundException(`Lead with ID ${id} not found`);
    }
    return lead;
  }

  async update(id: string, updateLeadDto: UpdateLeadDto) {
    const lead = await this.leadEntity.findOne(id);
    if (!lead) {
      throw new NotFoundException(`Lead with ID ${id} not found`);
    }
    const updatedLead = await this.leadEntity.update(id, updateLeadDto);
    return updatedLead;
  }

  async remove(id: string) {
    const lead = await this.leadEntity.findOne(id);
    if (!lead) {
      throw new NotFoundException(`Lead with ID ${id} not found`);
    }
    const deletedLead = await this.leadEntity.remove(id);
    return deletedLead;
  }
}
