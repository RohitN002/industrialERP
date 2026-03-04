import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { SaleRepository } from './entities/sale.entity';

@Injectable()
export class SalesService {
  constructor(private saleEntity: SaleRepository) { }

  async create(createSaleDto: CreateSaleDto) {
    const newSale = await this.saleEntity.create(createSaleDto);
    return newSale;
  }

  async findAll() {
    const sales = await this.saleEntity.findAll();
    if (!sales) {
      throw new NotFoundException('Sales not found');
    }
    return sales;
  }

  async findOne(id: string) {
    const sale = await this.saleEntity.findOne(id);
    if (!sale) {
      throw new NotFoundException(`Sale with ID ${id} not found`);
    }
    return sale;
  }

  async update(id: string, updateSaleDto: UpdateSaleDto) {
    const sale = await this.saleEntity.findOne(id);
    if (!sale) {
      throw new NotFoundException(`Sale with ID ${id} not found`);
    }
    const updatedSale = await this.saleEntity.update(id, updateSaleDto);
    return updatedSale;
  }

  async remove(id: string) {
    const sale = await this.saleEntity.findOne(id);
    if (!sale) {
      throw new NotFoundException(`Sale with ID ${id} not found`);
    }
    const deletedSale = await this.saleEntity.remove(id);
    return deletedSale;
  }
}
