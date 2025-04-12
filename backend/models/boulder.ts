import { PrismaClient, Boulder, GradeValue } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllBoulders = async (): Promise<Boulder[]> => {
  return prisma.boulder.findMany();
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
