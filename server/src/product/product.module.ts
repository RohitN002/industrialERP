import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
// import { ProductRepository } from './entities/product.entity';

@Module({
  controllers: [ProductController],
  providers: [ProductService,],
})
export class ProductModule {}
