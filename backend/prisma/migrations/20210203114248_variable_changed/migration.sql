/*
  Warnings:

  - You are about to drop the `Picture` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PictureToProject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PictureToProject" DROP CONSTRAINT "_PictureToProject_A_fkey";

-- DropForeignKey
ALTER TABLE "_PictureToProject" DROP CONSTRAINT "_PictureToProject_B_fkey";

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "filename" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ImageToProject" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- DropTable
DROP TABLE "Picture";

-- DropTable
DROP TABLE "_PictureToProject";

-- CreateIndex
CREATE UNIQUE INDEX "_ImageToProject_AB_unique" ON "_ImageToProject"("A", "B");

-- CreateIndex
CREATE INDEX "_ImageToProject_B_index" ON "_ImageToProject"("B");

-- AddForeignKey
ALTER TABLE "_ImageToProject" ADD FOREIGN KEY ("A") REFERENCES "Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ImageToProject" ADD FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
