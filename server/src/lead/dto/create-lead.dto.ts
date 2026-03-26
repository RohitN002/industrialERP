import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateLeadDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  phone?: string;
  @IsOptional()
  @IsString()
  address?: string;
  @IsOptional()
  @IsString()
  city?: string;
  @IsOptional()
  @IsString()
  state?: string;
  @IsOptional()
  @IsString()
  pincode?: string;
  @IsOptional()
  @IsString()
  country?: string;
  @IsOptional()
  @IsString()
  contactPerson?: string;
  @IsOptional()
  @IsString()
  contactPersonPhone?: string;
  @IsOptional()
  @IsString()
  gst?: string;
  @IsOptional()
  @IsString()
  company?: string;

  @IsOptional()
  @IsString()
  source?: string;

  @IsOptional()
  status?: string;

  @IsOptional()
  @IsUUID()
  assignedToId?: string;
}
