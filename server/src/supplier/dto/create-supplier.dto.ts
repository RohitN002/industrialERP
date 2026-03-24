import { IsString, IsNotEmpty, IsPhoneNumber, IsOptional } from 'class-validator';


export class CreateSupplierDto {
   @IsString()
    @IsOptional()
    phone?: string;
    @IsString()
    @IsNotEmpty()
name :string
@IsString()
@IsNotEmpty()
email:string
@IsString()
@IsNotEmpty()
city:string
@IsString()
@IsNotEmpty()
state:string
@IsString()
@IsNotEmpty()
country:string
@IsString()
@IsNotEmpty()
pincode:string
@IsString()
@IsNotEmpty()
contactPerson:string
@IsString()
@IsOptional()
contactPersonPhone:string
@IsString()
@IsOptional()
gst:string
    @IsString()
    @IsOptional()
    address?: string;
}
