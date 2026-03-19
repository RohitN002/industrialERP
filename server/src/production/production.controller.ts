import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { ProductionService } from './production.service';
import { CreateProductionDto } from './dto/create-production.dto';
import { UpdateProductionDto } from './dto/update-production.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('production')
@UseGuards(JwtGuard, RolesGuard)
@Roles('ADMIN', 'PRODUCTION')
export class ProductionController {
  constructor(private readonly productionService: ProductionService) {}

  @Post()
  create(@Req() req: any, @Body() createProductionDto: CreateProductionDto) {
    const userId = req.user.sub;
    return this.productionService.create(userId, createProductionDto);
  }

  @Get()
  findAll() {
    return this.productionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productionService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductionDto: UpdateProductionDto) {
    return this.productionService.update(id, updateProductionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productionService.remove(id);
  }
}
