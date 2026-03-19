/*
  Warnings:

  - Added the required column `stockQuantity` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "category" TEXT,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "stockQuantity" INTEGER NOT NULL,
ADD COLUMN     "supplier" TEXT,
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "unit" TEXT;
