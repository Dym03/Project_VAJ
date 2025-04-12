import { PrismaClient, BoulderGym } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllBoulderGyms = async (): Promise<BoulderGym[]> => {
  return prisma.boulderGym.findMany();
};

export const getBoulderGymById = async (id: number): Promise<BoulderGym[]> => {
  return prisma.boulderGym.findMany({
    where: { id: id },
  });
};

export const createBoulderGym = async (data: {
  name: string;
  city: string;
  address: string;
}): Promise<BoulderGym> => {
  return prisma.boulderGym.create({
    data,
  });
};
