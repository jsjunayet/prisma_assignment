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
exports.customerService = void 0;
const prismaClient_1 = require("../../../share/prismaClient");
const appError_1 = require("../../../share/appError");
const customerCreateFromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.prisma.customer.create({
        data: payload
    });
    return result;
});
const customerGetFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.prisma.customer.findMany();
    return result;
});
const customerGetSingleFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.prisma.customer.findUnique({
        where: {
            customerId: id
        }
    });
    if (!result) {
        throw new appError_1.AppError("Customer not found", 404);
    }
    return result;
});
const customerUpdateFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExit = yield prismaClient_1.prisma.customer.findUnique({
        where: {
            customerId: id
        }
    });
    if (!isExit) {
        throw new appError_1.AppError("Customer not found", 404);
    }
    const result = yield prismaClient_1.prisma.customer.update({
        where: {
            customerId: id
        },
        data: payload
    });
    return result;
});
const customerDeletedFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExit = yield prismaClient_1.prisma.customer.findUnique({
        where: {
            customerId: id
        }
    });
    if (!isExit) {
        throw new appError_1.AppError("Customer not found", 404);
    }
    const result = yield prismaClient_1.prisma.customer.delete({
        where: {
            customerId: id
        }
    });
    return result;
});
exports.customerService = {
    customerCreateFromDB,
    customerGetFromDB,
    customerGetSingleFromDB,
    customerUpdateFromDB,
    customerDeletedFromDB
};
