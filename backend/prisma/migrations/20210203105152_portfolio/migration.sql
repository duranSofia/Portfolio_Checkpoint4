-- CreateTable
CREATE TABLE "Picture" (
    "id" SERIAL NOT NULL,
    "filename" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PictureToProject" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PictureToProject_AB_unique" ON "_PictureToProject"("A", "B");

-- CreateIndex
CREATE INDEX "_PictureToProject_B_index" ON "_PictureToProject"("B");

-- AddForeignKey
ALTER TABLE "_PictureToProject" ADD FOREIGN KEY ("A") REFERENCES "Picture"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PictureToProject" ADD FOREIGN KEY ("B") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
