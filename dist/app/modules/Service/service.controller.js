"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceController = void 0;
const service_service_1 = require("./service.service");
const sendResponse_1 = require("../../../share/sendResponse");
const catchAsync_1 = require("../../../share/catchAsync");
const serviceCreateFromDB = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.serviceService.serviceCreateFromDB(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 201,
        message: "Service record created successfully",
        data: result
    });
}));
const serviceGetFromDB = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.serviceService.serviceGetFromDB();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Service records fetched successfully",
        data: result
    });
}));
const serviceGetSingleFromDB = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield service_service_1.serviceService.serviceGetSingleFromDB(id);
    console.log(result);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Service records fetched successfully",
        data: result
    });
}));
const serviceUpdateFromDB = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const body = req.body;
    console.log(body);
    const result = yield service_service_1.serviceService.serviceUpdateFromDB(id, body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Service marked as completed",
        data: result
    });
}));
const serviceDeletedFromDB = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield service_service_1.serviceService.serviceDeletedFromDB(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "services deleted successfully",
        data: null
    });
}));
const overdueServicesGetFromDB = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.serviceService.overdueServicesGetFromDB();
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: 200,
        message: "Overdue or pending services fetched successfully",
        data: result
    });
}));
exports.serviceController = {
    serviceCreateFromDB,
    serviceGetFromDB,
    serviceGetSingleFromDB,
    serviceUpdateFromDB,
    serviceDeletedFromDB,
    overdueServicesGetFromDB
};
