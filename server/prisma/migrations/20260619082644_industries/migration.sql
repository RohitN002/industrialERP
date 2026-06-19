/*
  Warnings:

  - You are about to drop the `Industry` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Industry";

-- CreateTable
CREATE TABLE "Industries" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Industries_pkey" PRIMARY KEY ("id")
);
