import express from 'express';
import { serviceController } from './service.controller';
const router = express.Router()

router.post('/', serviceController.serviceCreateFromDB)
export const serviceRoutes = router
