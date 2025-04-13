import express from 'express';
import * as gradeValueController from '../controllers/gradeValueController';

const router = express.Router();

router.get('/gradeValues', gradeValueController.getAllGradeValues);

export default router;
