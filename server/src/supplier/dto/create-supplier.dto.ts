import { IsString, IsNotEmpty, IsPhoneNumber, IsOptional } from 'class-validator';

export class CreateSupplierDto {
    @IsString()
    @IsNotEmpty()
    userId: string;

   @IsString()
    @IsOptional()
    phone?: string;

    @IsString()
    @IsOptional()
    address?: string;
}
