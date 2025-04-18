import { NextFunction, Request, RequestHandler, Response } from "express";
import { bikeService } from "./bike.service";
import { sendResponse } from "../../../share/sendResponse";
import { catchAsync } from "../../../share/catchAsync";


const bikeCreateFromDB =catchAsync(async(req:Request, res:Response)=>{
   const result = await bikeService.bikeCreateFromDB(req.body)
   sendResponse(res, {
        success:true,
        statusCode:200,
        message:"bike create Sucessfully!",
        data: result
   })
})
export const bikeController ={
    bikeCreateFromDB
}