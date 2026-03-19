import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor (
    private readonly productRepo:ProductRepository
  ){}
  async create(createProductDto: CreateProductDto) {
    const existingProduct = await this.productRepo.findBySku(createProductDto.sku);
    if (existingProduct) {
      throw new BadRequestException('Product already exists');
    }
    const newProduct=await this.productRepo.create(createProductDto);
    return newProduct;
  }

  async findAll() {
    const products= await this.productRepo.findAll();
    return products
  }

  async findOne(id: string) {
    const product = await this.productRepo.findOne(id)
    if(!product){
      throw new BadRequestException('No product found')
    }
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.productRepo.findOne(id)
    if(!product){
      throw new BadRequestException('No product found')
    }
    const updatedProduct = await this.productRepo.update(id, updateProductDto)
    return updatedProduct
  }

  async remove(id: string) {
    const product = await this.productRepo.findOne(id)
    if(!product){
      throw new BadRequestException('No product found')
    }
    const deletedProduct = await this.productRepo.remove(id)
    return deletedProduct
  }
}
