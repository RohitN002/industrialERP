import { Injectable } from '@nestjs/common';
import { CreateProductionDto } from './dto/create-production.dto';
import { UpdateProductionDto } from './dto/update-production.dto';

@Injectable()
export class ProductionService {
  create(createProductionDto: CreateProductionDto) {
    return 'This action adds a new production';
  }

  findAll() {
    return `This action returns all production`;
  }

  findOne(id: string) {
    return `This ac tion returns a #${id} production`;
  }

  update(id: string, updateProductionDto: UpdateProductionDto) {
    return `This action updates a #${id} production`;
  }

  remove(id: string) {
    return `This action removes a #${id} production`;
  }
}
