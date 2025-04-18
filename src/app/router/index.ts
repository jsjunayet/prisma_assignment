import { Router } from "express";
import { customerRoutes } from "../modules/Customer/customer.route";
import { bikeRoutes } from "../modules/Bike/bike.route";
import { serviceRoutes } from "../modules/Service/service.route";
const router = Router()

const AllRoutes =[
    {
        path:'/customers',
        route: customerRoutes
    },
    {
        path:'/bikes',
        route: bikeRoutes
    },
    {
        path:'/services',
        route: serviceRoutes
    }
]
AllRoutes.forEach((item)=>router.use(item.path, item.route))
export default router

