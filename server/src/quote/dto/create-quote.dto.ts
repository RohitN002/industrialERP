import {
  IsUUID,
  IsOptional,
  IsString,
  IsArray,
  ValidateNested,
  IsDateString,
  IsEnum,
  IsDecimal,
  Min,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';

class CreateQuoteItemDto {
  @IsOptional()
  @IsUUID()
  productId?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @Min(0)
  quantity: number;

  @IsNumber()
  @Min(0)
  unitPrice: number;

  @IsOptional()
  @IsDecimal()
  discount?: string;

  @IsOptional()
  @IsDecimal()
  tax?: string;
}

export class CreateQuoteDto {
  @IsString()
  quoteName: string;

  @IsOptional()
  @IsDateString()
  expiryDate?: string;

  @IsOptional()
  @IsString()
  currency?: string; // default handled in backend

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuoteItemDto)
  items: CreateQuoteItemDto[];

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @IsString()
  terms?: string;
}
