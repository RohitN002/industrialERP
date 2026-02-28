import { Injectable } from '@nestjs/common';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';

@Injectable()
export class LeadService {
  create(createLeadDto: CreateLeadDto) {
    return 'This action adds a new lead';
  }

  findAll() {
    return `This action returns all lead`;
  }

  findOne(id: any) {
    return `This action returns a #${id} lead`;
  }

  update(id: any, updateLeadDto: UpdateLeadDto) {
    return `This action updates a #${id} lead`;
  }

  remove(id: any) {
    return `This action removes a #${id} lead`;
  }
}
