import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { Lead } from './entities/lead.entity';

@Injectable()
export class LeadService {
  constructor(private leadEntity: Lead) { }

  async create(createLeadDto: CreateLeadDto) {
    return this.leadEntity.create(createLeadDto);
  }

  async findAll() {
    return this.leadEntity.findAll();
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
    return this.leadEntity.update(id, updateLeadDto);
  }

  async remove(id: string) {
    const lead = await this.leadEntity.findOne(id);
    if (!lead) {
      throw new NotFoundException(`Lead with ID ${id} not found`);
    }
    return this.leadEntity.remove(id);
  }
}
