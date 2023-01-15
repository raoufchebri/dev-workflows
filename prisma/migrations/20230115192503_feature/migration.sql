-- CreateTable
CREATE TABLE "shoe" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "shoe_pkey" PRIMARY KEY ("id")
);
