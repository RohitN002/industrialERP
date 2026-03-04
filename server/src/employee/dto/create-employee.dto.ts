import { IsString, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';

export class CreateEmployeeDto {
    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsOptional()
    designation?: string;

    @IsString()
    @IsOptional()
    department?: string;
}
