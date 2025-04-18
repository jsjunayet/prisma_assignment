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
exports.serviceService = void 0;
const prismaClient_1 = require("../../../share/prismaClient");
const appError_1 = require("../../../share/appError");
const date_fns_1 = require("date-fns");
const serviceCreateFromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.prisma.service.create({
        data: payload
    });
    return result;
});
const serviceGetFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.prisma.service.findMany();
    return result;
});
const serviceGetSingleFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.prisma.service.findUnique({
        where: {
            serviceId: id
        }
    });
    if (!result) {
        throw new appError_1.AppError("service not found", 404);
    }
    return result;
});
const serviceUpdateFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExit = yield prismaClient_1.prisma.service.findUnique({
        where: {
            serviceId: id
        }
    });
    if (!isExit) {
        throw new appError_1.AppError("service not found", 404);
    }
    const result = yield prismaClient_1.prisma.service.update({
        where: {
            serviceId: id
        },
        data: payload
    });
    return result;
});
const serviceDeletedFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExit = yield prismaClient_1.prisma.service.findUnique({
        where: {
            serviceId: id
        }
    });
    if (!isExit) {
        throw new appError_1.AppError("service not found", 404);
    }
    const result = yield prismaClient_1.prisma.service.delete({
        where: {
            serviceId: id
        }
    });
    return result;
});
const overdueServicesGetFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDayAgo = (0, date_fns_1.subDays)(new Date(), 7);
    const result = yield prismaClient_1.prisma.service.findMany({
        where: {
            status: {
                in: ['pending', 'in_progress']
            },
            serviceDate: {
                lt: sevenDayAgo
            }
        }
    });
    return result;
});
exports.serviceService = {
    serviceCreateFromDB,
    serviceGetFromDB,
    serviceGetSingleFromDB,
    serviceUpdateFromDB,
    serviceDeletedFromDB,
    overdueServicesGetFromDB
};
