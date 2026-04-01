import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateAttendanceDto {
  @IsNotEmpty()
  status: string;

  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  date: Date;
  @IsNotEmpty()
  checkIn?: Date;
  @IsNotEmpty()
  checkOut?: Date;
}
