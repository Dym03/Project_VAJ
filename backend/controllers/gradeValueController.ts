import { Request, Response } from "express";
import * as gradeValueModel from "../models/gradeValue";
import { GradeValue } from "@prisma/client";

export const isValidGrade = (grade: any): grade is GradeValue => {
  return Object.values(GradeValue).includes(grade);
};

export const getAllGradeValues = (_req: Request, res: Response): void => {
  try {
    const gradeValues = gradeValueModel.getAllGradeValues();
    res.status(200).json(gradeValues);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      // Handle unexpected error types
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
};
