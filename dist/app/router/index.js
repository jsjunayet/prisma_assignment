"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customer_route_1 = require("../modules/Customer/customer.route");
const bike_route_1 = require("../modules/Bike/bike.route");
const service_route_1 = require("../modules/Service/service.route");
const router = (0, express_1.Router)();
const AllRoutes = [
    {
        path: '/customers',
        route: customer_route_1.customerRoutes
    },
    {
        path: '/bikes',
        route: bike_route_1.bikeRoutes
    },
    {
        path: '/services',
        route: service_route_1.serviceRoutes
    }
];
AllRoutes.forEach((item) => router.use(item.path, item.route));
exports.default = router;
