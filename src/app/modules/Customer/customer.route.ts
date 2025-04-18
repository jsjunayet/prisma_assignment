import express from 'express';
import { customerController } from './customer.controller';
const router = express.Router()

router.post('/', customerController.customerCreateFromDB)
router.get('/', customerController.customerGetFromDB)
router.get('/:id', customerController.customerGetSingleFromDB)
router.put('/:id', customerController.customerUpdateFromDB)
router.delete('/:id', customerController.customerDeletedFromDB)


export const customerRoutes = router
