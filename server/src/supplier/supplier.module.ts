import { Module } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierController } from './supplier.controller';
import { SupplierRepository } from './entities/supplier.entity';

@Module({
  controllers: [SupplierController],
  providers: [SupplierService, SupplierRepository],
})
export class SupplierModule { }
