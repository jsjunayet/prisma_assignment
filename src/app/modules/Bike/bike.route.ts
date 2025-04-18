import express from 'express';
import { bikeController } from './bike.controller';
const router = express.Router()

router.post('/', bikeController.bikeCreateFromDB)
router.get('/', bikeController.bikeGetFromDB)
router.get('/:id', bikeController.bikeGetSingleFromDB)
export const bikeRoutes = router