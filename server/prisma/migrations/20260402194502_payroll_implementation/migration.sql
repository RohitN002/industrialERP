/*
  Warnings:

  - Added the required column `salaryType` to the `Payroll` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `SalaryStructure` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SalaryType" AS ENUM ('MONTHLY', 'DAILY', 'HOURLY');

-- AlterTable
ALTER TABLE "Payroll" ADD COLUMN     "baseSalary" INTEGER,
ADD COLUMN     "perDayRate" INTEGER,
ADD COLUMN     "perHourRate" INTEGER,
ADD COLUMN     "salaryType" "SalaryType" NOT NULL;

-- AlterTable
ALTER TABLE "SalaryStructure" ADD COLUMN     "type" "SalaryType" NOT NULL,
ALTER COLUMN "baseSalary" DROP NOT NULL;
