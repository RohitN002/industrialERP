import { IsEnum, IsNotEmpty, IsString, IsUUID } from "class-validator";


export class CreateAttendanceDto {
    @IsNotEmpty()

    status: string;

    @IsNotEmpty()
    @IsUUID()
    userId: string;

    @IsNotEmpty()
    @IsUUID()
    createdById: string;

    @IsNotEmpty()
    items: {
        productId: string;
        quantity: number;
        unitPrice: number;
    }[];
}
