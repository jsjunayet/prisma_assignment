import { NextFunction, Request, RequestHandler, Response } from "express";
import { customerService } from "./customer.service";
import { sendResponse } from "../../../share/sendResponse";
import { catchAsync } from "../../../share/catchAsync";


const customerCreateFromDB =catchAsync(async(req:Request, res:Response)=>{
   const result = await customerService.customerCreateFromDB(req.body)
   sendResponse(res, {
        success:true,
        statusCode:200,
        message:"customer create Sucessfully!",
        data: result
   })
})
export const customerController ={
    customerCreateFromDB
}