/*
  Warnings:

  - Added the required column `city` to the `Supplier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactPerson` to the `Supplier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactPersonPhone` to the `Supplier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Supplier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gst` to the `Supplier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pincode` to the `Supplier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Supplier` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "RoleType" ADD VALUE 'SUPPLIER';

-- AlterTable
ALTER TABLE "Supplier" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "contactPerson" TEXT NOT NULL,
ADD COLUMN     "contactPersonPhone" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "gst" TEXT NOT NULL,
ADD COLUMN     "pincode" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL;
