import express from 'express';
import { customerController } from './customer.controller';
const router = express.Router()

router.post('/customer', customerController.customerCreateFromDB)
export default router