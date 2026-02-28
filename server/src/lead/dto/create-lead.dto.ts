import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';


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
    company?: string;

    @IsOptional()
    @IsString()
    source?: string;

    @IsOptional()

    status?: string;

    @IsOptional()
    @IsUUID()
    assignedToId?: string;

    @IsNotEmpty()
    @IsUUID()
    createdById: string;
}
