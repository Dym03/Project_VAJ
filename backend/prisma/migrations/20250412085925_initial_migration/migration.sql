-- CreateTable
CREATE TABLE "BoulderGym" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Boulder" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "grade" TEXT NOT NULL,
    "builderName" TEXT NOT NULL,
    "gym_id" INTEGER NOT NULL,
    CONSTRAINT "Boulder_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "BoulderGym" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserGrade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "grade" TEXT NOT NULL,
    "boulderId" INTEGER NOT NULL,
    CONSTRAINT "UserGrade_boulderId_fkey" FOREIGN KEY ("boulderId") REFERENCES "Boulder" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "UserGrade_username_boulderId_key" ON "UserGrade"("username", "boulderId");
