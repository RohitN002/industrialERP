import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePurchaseDto } from './dto/create-purchase.dto';
import { UpdatePurchaseDto } from './dto/update-purchase.dto';
import { PurchaseRepository } from './entities/purchase.entity';

@Injectable()
export class PurchaseService {
  constructor(private purchaseEntity: PurchaseRepository) { }

  async create(createPurchaseDto: CreatePurchaseDto) {
    const existingPurchase = await this.purchaseEntity.findOne(createPurchaseDto.referenceNo);
    if (existingPurchase) {
      throw new Error('Purchase already exists');
    }
    const newPurchase = await this.purchaseEntity.create(createPurchaseDto);
    return newPurchase;
  }

  async findAll() {
    const purchases = await this.purchaseEntity.findAll();
    if (!purchases) {
      throw new Error('Purchase not found');
    }
    return purchases;
  }

  async findOne(id: string) {
    const purchase = await this.purchaseEntity.findOne(id);
    if (!purchase) {
      throw new NotFoundException(`Purchase with ID ${id} not found`);
    }
    return purchase;
  }

  async update(id: string, updatePurchaseDto: UpdatePurchaseDto) {
    const purchase = await this.purchaseEntity.findOne(id);
    if (!purchase) {
      throw new NotFoundException(`Purchase with ID ${id} not found`);
    }
    const updatedPurchase = await this.purchaseEntity.update(id, updatePurchaseDto);
    return updatedPurchase;
  }

  async remove(id: string) {
    const purchase = await this.purchaseEntity.findOne(id);
    if (!purchase) {
      throw new NotFoundException(`Purchase with ID ${id} not found`);
    }
    const deletedPurchase = await this.purchaseEntity.remove(id);
    return deletedPurchase;
  }
}
