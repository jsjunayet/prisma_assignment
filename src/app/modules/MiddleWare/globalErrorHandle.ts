import { NextFunction, Request, Response } from "express"

export const  GlobalErrorHandle = (err:any, req:Request, res:Response, next:NextFunction) => {
    const statusCode = err.statusCode || 500;
        res.status(statusCode).json({
            success:false,
            status: statusCode,
            message:err.message || "something went Wrong!",
            stack: process.env.NODE_ENV !== "production" ? err.stack : undefined,
        })
    
    }
