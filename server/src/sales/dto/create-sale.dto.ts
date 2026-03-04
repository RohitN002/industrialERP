import { IsEnum, IsNotEmpty, IsString, IsUUID } from "class-validator";
import { SaleStatus } from "@prisma/client";

export class CreateSaleDto {
    @IsNotEmpty()
    @IsEnum(SaleStatus)
    status: SaleStatus;

    @IsNotEmpty()
    @IsUUID()
    customerId: string;

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
