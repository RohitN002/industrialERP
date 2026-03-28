import {
  IsString,
  IsDateString,
  IsNumber,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateOrderDto {
  @IsString()
  clientId: string;

  @IsString()
  orderNumber: string;

  @IsDateString()
  orderDate: Date;

  @IsDateString()
  expectedDeliveryDate: Date;

  @IsString()
  status: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];

  @IsString()
  shippingAddress: string;

  @IsString()
  billingAddress: string;

  @IsString()
  shippingMethod: string;

  @IsString()
  paymentMethod: string;

  @IsString()
  notes: string;

  @IsNumber()
  subTotal: number;
  @IsString()
  priority: string;
  @IsNumber()
  totalTax: number;
  @IsString()
  paymentStatus: string;
  @IsNumber()
  totalAmount: number;

  @IsNumber()
  totalDiscount: number;

  @IsNumber()
  shippingCost: number;

  @IsNumber()
  grandTotal: number;

  @IsString()
  shippingContact: string;
  @IsString()
  shippingPhone: string;
  @IsString()
  shippingCity: string;
  @IsString()
  shippingState: string;
  @IsString()
  shippingPincode: string;
  @IsString()
  shippingCountry: string;
  @IsString()
  currency: string;
}

export class OrderItemDto {
  @IsString()
  productId: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  unitPrice: number;
}
