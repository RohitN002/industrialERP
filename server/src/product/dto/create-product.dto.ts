import {
  IsString,
  IsOptional,
  IsNumber,
  IsInt,
  IsUUID,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  sku: string;

  @IsOptional()
  @IsString()
  description?: string;

@IsNumber()
  price: number;

  @IsInt()
  stockQuantity: number;

  @IsString()
  type: string;

  @IsOptional()
  @IsString()
  unit?: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  // ✅ Relations
  @IsUUID()
  categoryId: string;

  @IsOptional()
  @IsUUID()
  supplierId?: string;
}