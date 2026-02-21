import {
  IsEmail,
  IsString,
  MinLength,
  IsBoolean,
  IsOptional,
  IsArray,
  IsEnum,
} from 'class-validator';

// Assuming you have a UserRole enum defined elsewhere
export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  EMPLOYEE = 'EMPLOYEE',
  CUSTOMER = 'CUSTOMER',
}

export class CreateUserDto {
  @IsEmail({}, { message: 'A valid email is required' })
  email: string;

  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password: string; // User sends "password", you convert to "passwordHash" in service

  @IsBoolean()
  @IsOptional()
  isActive?: boolean = true;

  @IsArray()
  @IsEnum(UserRole, { each: true })
  @IsOptional()
  roles?: UserRole[] = [UserRole.USER];
}
