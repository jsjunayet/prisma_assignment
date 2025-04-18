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
exports.bikeService = void 0;
const prismaClient_1 = require("../../../share/prismaClient");
const appError_1 = require("../../../share/appError");
const bikeCreateFromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.prisma.bike.create({
        data: payload
    });
    return result;
});
const bikeGetFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.prisma.bike.findMany();
    return result;
});
const bikeGetSingleFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.prisma.bike.findUnique({
        where: {
            bikeId: id
        }
    });
    if (!result) {
        throw new appError_1.AppError("bike not found", 404);
    }
    return result;
});
exports.bikeService = {
    bikeCreateFromDB,
    bikeGetFromDB,
    bikeGetSingleFromDB,
};
