/*
  Warnings:

  - The `source` column on the `Attendance` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "AttendanceSource" AS ENUM ('MANUAL', 'BIOMETRIC', 'SYSTEM');

-- AlterTable
ALTER TABLE "Attendance" DROP COLUMN "source",
ADD COLUMN     "source" "AttendanceSource" NOT NULL DEFAULT 'MANUAL';
