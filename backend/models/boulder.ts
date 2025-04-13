import { PrismaClient, Boulder, GradeValue } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllBoulders = async (): Promise<Boulder[]> => {
  return prisma.boulder.findMany({ include: { gym: true } });
};

export const getBoulderById = async (id: number): Promise<Boulder | null> => {
  return prisma.boulder.findUnique({
    where: { id },
    include: { gym: true }, // include the gym info if needed for the form
  });
};

export const getAllActiveBoulders = async (): Promise<Boulder[]> => {
  return prisma.boulder.findMany({
    where: { active: true },
    include: { gym: true },
  });
};

export const createBoulder = async (data: {
  name: string;
  grade: GradeValue;
  builderName: string;
  gym_id: number;
  active: boolean;
}): Promise<Boulder> => {
  return prisma.boulder.create({
    data,
  });
};

export const updateBoulder = async (
  data: {
    name: string;
    grade: GradeValue;
    builderName: string;
    gym_id: number;
    active: boolean;
  },
  id: number,
): Promise<Boulder> => {
  return prisma.boulder.update({
    where: { id: id },
    data: data,
  });
};

export const deleteBoulder = async (id: number): Promise<Boulder> => {
  return prisma.boulder.delete({
    where: { id: id },
  });
};
