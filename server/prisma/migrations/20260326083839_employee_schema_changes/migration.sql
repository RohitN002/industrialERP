/*
  Warnings:

  - A unique constraint covering the columns `[mobileNumber]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `mobileNumber` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "address" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "dateOfBirth" TIMESTAMP(3),
ADD COLUMN     "fatherName" TEXT,
ADD COLUMN     "gender" TEXT,
ADD COLUMN     "mobileNumber" TEXT NOT NULL,
ADD COLUMN     "motherName" TEXT,
ADD COLUMN     "pincode" TEXT,
ADD COLUMN     "state" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Employee_mobileNumber_key" ON "Employee"("mobileNumber");
