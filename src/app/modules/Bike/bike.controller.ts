import { NextFunction, Request, RequestHandler, Response } from "express";
import { bikeService } from "./bike.service";
import { sendResponse } from "../../../share/sendResponse";
import { catchAsync } from "../../../share/catchAsync";


const bikeCreateFromDB =catchAsync(async(req:Request, res:Response)=>{
   const result = await bikeService.bikeCreateFromDB(req.body)
   sendResponse(res, {
        success:true,
        statusCode:201,
        message:"Bike added successfully",
        data: result
   })
})
const bikeGetFromDB =catchAsync(async(req:Request, res:Response)=>{
    const result = await bikeService.bikeGetFromDB()
    sendResponse(res, {
         success:true,
         statusCode:200,
         message:"Bikes fetched successfully",
         data: result
    })
 })
 const bikeGetSingleFromDB =catchAsync(async(req:Request, res:Response)=>{
    const {id}=req.params
    const result = await bikeService.bikeGetSingleFromDB(id)
    console.log(result);
    sendResponse(res, {
         success:true,
         statusCode:200,
         message:"Bike fetched successfully",
         data: result
    })
 })
 
export const bikeController ={
    bikeCreateFromDB,
    bikeGetFromDB,
    bikeGetSingleFromDB,
}