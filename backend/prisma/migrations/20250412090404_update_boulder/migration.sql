/*
  Warnings:

  - You are about to drop the column `active` on the `BoulderGym` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `BoulderGym` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Boulder" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "grade" TEXT NOT NULL,
    "builderName" TEXT NOT NULL,
    "gym_id" INTEGER NOT NULL,
    CONSTRAINT "Boulder_gym_id_fkey" FOREIGN KEY ("gym_id") REFERENCES "BoulderGym" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Boulder" ("builderName", "grade", "gym_id", "id", "name") SELECT "builderName", "grade", "gym_id", "id", "name" FROM "Boulder";
DROP TABLE "Boulder";
ALTER TABLE "new_Boulder" RENAME TO "Boulder";
CREATE TABLE "new_BoulderGym" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL
);
INSERT INTO "new_BoulderGym" ("address", "city", "id", "name") SELECT "address", "city", "id", "name" FROM "BoulderGym";
DROP TABLE "BoulderGym";
ALTER TABLE "new_BoulderGym" RENAME TO "BoulderGym";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
