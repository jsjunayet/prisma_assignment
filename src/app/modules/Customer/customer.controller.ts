import { NextFunction, Request, RequestHandler, Response } from "express";
import { customerService } from "./customer.service";
import { sendResponse } from "../../../share/sendResponse";
import { catchAsync } from "../../../share/catchAsync";


const customerCreateFromDB =catchAsync(async(req:Request, res:Response)=>{
   const result = await customerService.customerCreateFromDB(req.body)
   sendResponse(res, {
        success:true,
        statusCode:200,
        message:"Customer created successfully",
        data: result
   })
})
const customerGetFromDB =catchAsync(async(req:Request, res:Response)=>{
    const result = await customerService.customerGetFromDB()
    sendResponse(res, {
         success:true,
         statusCode:200,
         message:"Customers fetched successfully",
         data: result
    })
 })
export const customerController ={
    customerCreateFromDB,
    customerGetFromDB
}