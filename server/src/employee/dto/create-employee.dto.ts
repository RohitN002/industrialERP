import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  mobileNumber: string;
  @IsString()
  fatherName: string;
  @IsString()
  motherName: string;
  @IsString()
  address: string;
  @IsString()
  city: string;
  @IsString()
  state: string;
  @IsString()
  pincode: string;
  @IsString()
  country: string;
  @IsString()
  contactPerson: string;
  @IsString()
  contactPersonPhone: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  name: string;
  @IsString()
  gender: string;
  @IsString()
  dateOfBirth: string;
  // Employee fields
  @IsOptional()
  designationId?: string;

  @IsOptional()
  departmentId?: string;
}
