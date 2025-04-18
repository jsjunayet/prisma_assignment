import express from 'express';
import { serviceController } from './service.controller';
const router = express.Router()

router.post('/', serviceController.serviceCreateFromDB)
router.get('/', serviceController.serviceGetFromDB)
router.get('/:id', serviceController.serviceGetSingleFromDB)
router.get('/hello/status', serviceController.overdueServicesGetFromDB)
router.put('/:id', serviceController.serviceUpdateFromDB)
export const serviceRoutes = router
