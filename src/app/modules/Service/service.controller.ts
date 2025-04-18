import { NextFunction, Request, RequestHandler, Response } from "express";
import { serviceService } from "./service.service";
import { sendResponse } from "../../../share/sendResponse";
import { catchAsync } from "../../../share/catchAsync";


const serviceCreateFromDB =catchAsync(async(req:Request, res:Response)=>{
   const result = await serviceService.serviceCreateFromDB(req.body)
   sendResponse(res, {
        success:true,
        statusCode:200,
        message:"service create Sucessfully!",
        data: result
   })
})
export const serviceController ={
    serviceCreateFromDB
}