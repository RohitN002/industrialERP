import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateAttendanceDto {
  @IsNotEmpty()
  status: string;

  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  date: Date;
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  checkIn?: Date;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  checkOut?: Date;
  @IsOptional()
  workedHours?: number;
  @IsOptional()
  workedMinutes?: number;
}
