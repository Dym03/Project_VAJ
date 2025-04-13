import { GradeValue } from '@prisma/client';

export const getAllGradeValues = (): GradeValue[] => {
  return Object.values(GradeValue);
};
