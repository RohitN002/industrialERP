import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class CreatePurchaseDto {
    @IsNotEmpty()
    @IsString()
    referenceNo: string;

    @IsNotEmpty()
    @IsUUID()
    createdById: string;

    @IsNotEmpty()
    @IsNumber()
    items: {
        productId: string;
        quantity: number;
        unitPrice: number;
    }[];
}
