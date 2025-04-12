import { Request, Response } from 'express';
import * as boulderGymModel from '../models/boulderGym';

export const getAllBoulderGyms = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  try {
    const boulderGyms = await boulderGymModel.getAllBoulderGyms();
    res.status(200).json(boulderGyms);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export const getBoulderGymById = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  const { id } = _req.params;
  try {
    const boulderGyms = await boulderGymModel.getBoulderGymById(parseInt(id));
    res.status(200).json(boulderGyms);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export const createBoulderGym = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { name, city, address } = req.body;

  if (!city || !name || !address) {
    res.status(400).json({ error: 'Name, city and adress are required' });
    return;
  }

  try {
    const newBoulderGym = await boulderGymModel.createBoulderGym({
      name,
      city,
      address,
    });
    res.status(201).json(newBoulderGym);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};
