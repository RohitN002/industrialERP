/*
  Warnings:

  - A unique constraint covering the columns `[quoteName]` on the table `Quote` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Quote" ADD COLUMN     "quoteName" TEXT;

-- AlterTable
ALTER TABLE "QuoteItem" ALTER COLUMN "description" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Quote_quoteName_key" ON "Quote"("quoteName");
