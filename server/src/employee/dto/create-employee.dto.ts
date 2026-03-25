import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class CreateEmployeeDto {
  // User fields
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string; // plain password (you will hash it in service)

  @IsNotEmpty()
  name: string;

  // Employee fields
  @IsOptional()
  designation?: string;

  @IsOptional()
  department?: string;
}