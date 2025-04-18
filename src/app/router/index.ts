import { Router } from "express";
import { customerRoutes } from "../modules/Customer/customer.route";
import { bikeRoutes } from "../modules/Bike/bike.route";
const router = Router()

const AllRoutes =[
    {
        path:'/customer',
        route: customerRoutes
    },
    {
        path:'/bike',
        route: bikeRoutes
    }
]
AllRoutes.forEach((item)=>router.use(item.path, item.route))
export default router

