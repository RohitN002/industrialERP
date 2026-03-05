import { Module } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { PurchaseController } from './purchase.controller';
import { PurchaseRepository } from './entities/purchase.entity';

@Module({
  controllers: [PurchaseController],
  providers: [PurchaseService, PurchaseRepository],
})
export class PurchaseModule {}
