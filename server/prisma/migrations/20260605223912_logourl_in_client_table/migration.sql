/*
  Warnings:

  - The values [FAILED] on the enum `PayrollStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PayrollStatus_new" AS ENUM ('PENDING', 'GENERATED', 'PAID', 'FAILEDmo');
ALTER TABLE "public"."Payroll" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Payroll" ALTER COLUMN "status" TYPE "PayrollStatus_new" USING ("status"::text::"PayrollStatus_new");
ALTER TYPE "PayrollStatus" RENAME TO "PayrollStatus_old";
ALTER TYPE "PayrollStatus_new" RENAME TO "PayrollStatus";
DROP TYPE "public"."PayrollStatus_old";
ALTER TABLE "Payroll" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "logoUrl" TEXT;
