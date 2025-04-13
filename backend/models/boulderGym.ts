import { PrismaClient, BoulderGym } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllBoulderGyms = async (): Promise<BoulderGym[]> => {
  return prisma.boulderGym.findMany({
    include: {
      boulders: true, // This tells Prisma to fetch the related boulders
    },
  });
};

export const getBoulderGymById = async (
  id: number,
): Promise<BoulderGym | null> => {
  return prisma.boulderGym.findUnique({
    where: { id },
    include: { boulders: true },
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

export const groupBoulderGymsByCity = async (
  gyms: BoulderGym[],
): Promise<Record<string, BoulderGym[]>> => {
  const grouped = gyms.reduce((acc: Record<string, BoulderGym[]>, gym) => {
    if (!acc[gym.city]) {
      acc[gym.city] = [];
    }
    acc[gym.city].push(gym);
    return acc;
  }, {});

  const sorted: Record<string, BoulderGym[]> = {};
  Object.keys(grouped)
    .sort((a, b) => a.localeCompare(b))
    .forEach((city) => {
      sorted[city] = grouped[city];
    });

  return sorted;
};
