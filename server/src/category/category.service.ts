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
    return this.categoryRepo.createCategory(createCategoryDto.name);
  }

  async findAll() {
    return this.categoryRepo.findAllCategories();
  }

  async findOne(id: string) {
    const category = await this.categoryRepo.findCategoryById(id);
    if (!category) {
      throw new NotFoundException(`Category with id "${id}" not found`);
    }
    return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    await this.findOne(id); // throws NotFoundException if not found
    if (!updateCategoryDto.name) {
      throw new BadRequestException('name is required to update a category');
    }
    return this.categoryRepo.updateCategory(id, updateCategoryDto.name);
  }

  async remove(id: string) {
    await this.findOne(id); // throws NotFoundException if not found
    return this.categoryRepo.deleteCategory(id);
  }
}
