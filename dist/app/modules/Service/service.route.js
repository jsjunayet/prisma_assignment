"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const router = express_1.default.Router();
router.post('/', service_controller_1.serviceController.serviceCreateFromDB);
router.get('/', service_controller_1.serviceController.serviceGetFromDB);
router.get('/:id', service_controller_1.serviceController.serviceGetSingleFromDB);
router.get('/hello/status', service_controller_1.serviceController.overdueServicesGetFromDB);
router.put('/:id', service_controller_1.serviceController.serviceUpdateFromDB);
exports.serviceRoutes = router;
