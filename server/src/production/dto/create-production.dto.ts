import { IsString, IsNotEmpty, IsEnum, IsArray, ValidateNested, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export enum ProductionStatus {
  PLANNED = 'PLANNED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  REJECTED = 'REJECTED',
}

export class CreateProductionItemDto {
  @IsString()
  @IsNotEmpty()
  productId: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}

export class CreateProductionDto {
  @IsString()
  @IsNotEmpty()
  batchNo: string;

  @IsEnum(ProductionStatus)
  @IsOptional()
  status?: ProductionStatus;

  @IsString()
  @IsNotEmpty()
  producedProductId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateProductionItemDto)
  items: CreateProductionItemDto[];
}
