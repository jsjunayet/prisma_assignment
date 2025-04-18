"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalErrorHandle = void 0;
const GlobalErrorHandle = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: err.message || "something went Wrong!",
        stack: process.env.NODE_ENV !== "production" ? err.stack : undefined,
    });
};
exports.GlobalErrorHandle = GlobalErrorHandle;
