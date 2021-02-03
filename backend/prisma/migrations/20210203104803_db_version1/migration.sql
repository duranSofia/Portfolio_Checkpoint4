-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "poster" TEXT NOT NULL,
    "repository" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "clientId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "industry" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Technology" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "experience" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProjectToTechnology" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectToTechnology_AB_unique" ON "_ProjectToTechnology"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectToTechnology_B_index" ON "_ProjectToTechnology"("B");

-- AddForeignKey
ALTER TABLE "Project" ADD FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTechnology" ADD FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTechnology" ADD FOREIGN KEY ("B") REFERENCES "Technology"("id") ON DELETE CASCADE ON UPDATE CASCADE;
