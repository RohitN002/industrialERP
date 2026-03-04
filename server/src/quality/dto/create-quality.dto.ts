import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";
import { QualityStatus } from "@prisma/client";

export class CreateQualityDto {
    @IsNotEmpty()
    @IsEnum(QualityStatus)
    status: QualityStatus;

    @IsOptional()
    @IsString()
    remarks?: string;

    @IsOptional()
    @IsUUID()
    productionId?: string;

    @IsOptional()
    @IsUUID()
    purchaseId?: string;

    @IsNotEmpty()
    @IsUUID()
    inspectedById: string;
}
