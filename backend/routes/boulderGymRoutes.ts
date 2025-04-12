import express from 'express';
import * as boulderGymController from '../controllers/boulderGymController';

const router = express.Router();

router.get('/boulderGyms', boulderGymController.getAllBoulderGyms);
router.post('/boulderGyms', boulderGymController.createBoulderGym);
router.get('/boulderGyms/:id', boulderGymController.getBoulderGymById);

export default router;
