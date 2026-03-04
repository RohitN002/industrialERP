import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQualityDto } from './dto/create-quality.dto';
import { UpdateQualityDto } from './dto/update-quality.dto';
import { QualityRepository } from './entities/quality.entity';

@Injectable()
export class QualityService {
  constructor(private qualityEntity: QualityRepository) { }

  async create(createQualityDto: CreateQualityDto) {
    const existingQuality = await this.qualityEntity.findOne(createQualityDto.inspectedById);
    if (existingQuality) {
      throw new Error('Quality already exists');
    }
    const newQuality = await this.qualityEntity.create(createQualityDto);
    return newQuality;
  }

  async findAll() {
    const qualities = await this.qualityEntity.findAll();
    if (!qualities) {
      throw new Error('Quality not found');
    }
    return qualities;
  }

  findOne(id: number) {
    return `This action returns a #${id} quality`;
  }

  update(id: number, updateQualityDto: UpdateQualityDto) {
    return `This action updates a #${id} quality`;
  }

  remove(id: number) {
    return `This action removes a #${id} quality`;
  }
}
