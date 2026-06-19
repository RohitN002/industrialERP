/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Industries` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Industries_name_key" ON "Industries"("name");
