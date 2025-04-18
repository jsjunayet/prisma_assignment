import express from 'express';
import { customerController } from './customer.controller';
const router = express.Router()

router.post('/', customerController.customerCreateFromDB)
export const customerRoutes = router
