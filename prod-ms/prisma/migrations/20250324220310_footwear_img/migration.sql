/*
  Warnings:

  - Added the required column `color` to the `Footwear` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hoverImage` to the `Footwear` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Footwear` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Footwear` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Footwear" ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "hoverImage" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
