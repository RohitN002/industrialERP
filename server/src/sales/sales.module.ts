import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { SalesRepository } from './entities/sales.entity';

@Module({
  controllers: [SalesController],
  providers: [SalesService, SalesRepository],
})
export class SalesModule {}
