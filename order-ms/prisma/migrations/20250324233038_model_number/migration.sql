/*
  Warnings:

  - Added the required column `modelNumber` to the `Footwear` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Footwear" ADD COLUMN     "modelNumber" TEXT NOT NULL;
