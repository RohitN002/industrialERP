import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { categoryRepository } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepo: categoryRepository) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const existing = await this.categoryRepo.findCategoryByName(createCategoryDto.name);
    if (existing) {
      throw new ConflictException(`Category "${createCategoryDto.name}" already exists`);
    }
    const newCategory= await this.categoryRepo.createCategory(createCategoryDto.name);
    
    return {message:"Category created successfully",data:newCategory};
  }

  async findAll() {
    const categories = await this.categoryRepo.findAllCategories();
  if(categories.length===0){
  return {message:"Categories not found create a new one to get started",data:[]};
  }
    return {message:"Categories fetched successfully",data:categories};
  }

  async findOne(id: string) {
    const category = await this.categoryRepo.findCategoryById(id);
    if (!category) {
      throw new NotFoundException(`Category with id "${id}" not found`);
    }
    return {message:"Category fetched successfully",data:category};
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    await this.findOne(id); // throws NotFoundException if not found
    if (!updateCategoryDto.name) {
      throw new BadRequestException('name is required to update a category');
    }
    const updatedCategory = await this.categoryRepo.updateCategory(id, updateCategoryDto.name);
    return {message:"Category updated successfully",data:updatedCategory};
  }

  async remove(id: string) {
    await this.findOne(id); // throws NotFoundException if not found
    await this.categoryRepo.deleteCategory(id);
    return {message:"Category deleted successfully"};
  }
}
