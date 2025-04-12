import { Request, Response } from 'express';
import * as boulderModel from '../models/boulder';
import { isValidGrade } from './gradeValueController';

export const getAllBoulders = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const boulders = await boulderModel.getAllBoulders();
    res.status(200).json(boulders);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export const createBoulder = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { name, builderName, grade, id, active } = req.body;
  const gym_id = parseInt(id);
  if (!builderName || !name || !grade || !gym_id) {
    res.status(400).json({
      error: 'Builder`s name, boulder name, grade and gym id are required',
    });
    return;
  }

  if (!isValidGrade(grade)) {
    res.status(400).json({ error: 'The grade value is not valid' });
    return;
  }

  try {
    const newBoulderGym = await boulderModel.createBoulder({
      name,
      builderName,
      grade,
      gym_id,
      active,
    });
    res.status(201).json(newBoulderGym);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export const updateBoulder = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params;
  let { name, builderName, grade, gym_id, active } = req.body;
  const parsed_id = parseInt(id);

  name = name?.trim() ? name : undefined;
  builderName = builderName?.trim() ? builderName : undefined;
  grade = grade?.trim() ? grade : undefined;
  gym_id = gym_id?.trim() ? parseInt(gym_id) : undefined;
  active = active?.trim() ? active : undefined;

  if (!isValidGrade(grade)) {
    res.status(400).json({ error: 'The grade value is not valid' });
    return;
  }

  try {
    const updatedBoulder = await boulderModel.updateBoulder(
      { name, builderName, grade, gym_id, active },
      parsed_id,
    );
    res.json(updatedBoulder);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export const deleteBoulder = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params;
  const parsed_id = parseInt(id);

  try {
    const deletedBoulder = await boulderModel.deleteBoulder(parsed_id);
    res.json(deletedBoulder);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};
