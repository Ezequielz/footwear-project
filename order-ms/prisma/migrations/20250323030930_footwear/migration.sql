-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MEN', 'WOMEN', 'KID', 'UNISEX');

-- CreateEnum
CREATE TYPE "AvailabilityStatus" AS ENUM ('IN_STOCK', 'NOT_AVAILABLE');

-- CreateTable
CREATE TABLE "Size" (
    "sku" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "status" "AvailabilityStatus" NOT NULL,
    "size" TEXT NOT NULL,
    "footwearId" TEXT
);

-- CreateTable
CREATE TABLE "Footwear" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "slug" TEXT NOT NULL,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "gender" "Gender" NOT NULL,

    CONSTRAINT "Footwear_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Size_sku_key" ON "Size"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "Footwear_slug_key" ON "Footwear"("slug");

-- CreateIndex
CREATE INDEX "Footwear_gender_idx" ON "Footwear"("gender");

-- AddForeignKey
ALTER TABLE "Size" ADD CONSTRAINT "Size_footwearId_fkey" FOREIGN KEY ("footwearId") REFERENCES "Footwear"("id") ON DELETE SET NULL ON UPDATE CASCADE;
