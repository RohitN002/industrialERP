import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { SupplierRepository } from './entities/supplier.entity';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class SupplierService {
  constructor (private readonly supplierRepo: SupplierRepository,
    private readonly prisma: PrismaService
  ) {}
async create(dto: CreateSupplierDto) {
  const supplier = await this.supplierRepo.createSupplier(dto);
  return {message:"Supplier created successfully",data:supplier};
}

  async findAll() {
    const suppliers = await this.supplierRepo.findAllSuppliers();
    if(suppliers.length===0){
      return {message:"Suppliers not found create a new one to get started",data:[]};
    }
    return {message:"Suppliers fetched successfully",data:suppliers};
  }

  async findOne(id: string) {
    const supplier = await this.supplierRepo.findSupplierById(id);
    if(!supplier){
      throw new NotFoundException(`Supplier with id "${id}" not found`);
    }
    return {message:"Supplier fetched successfully",data:supplier};
  }

  async update(id: string, updateSupplierDto: UpdateSupplierDto) {
    const supplier= await this.findOne(id);
    if(!supplier){
      throw new NotFoundException(`Supplier with id "${id}" not found`);
    }
const updatedSupplier = await this.supplierRepo.updateSupplier(
  id,
  updateSupplierDto
);
    return {message:"Supplier updated successfully",data:updatedSupplier};
  }

async  remove(id: string) {
    await this.findOne(id);
    await this.supplierRepo.deleteSupplier(id);
    return {message:"Supplier deleted successfully"};
  }
}
