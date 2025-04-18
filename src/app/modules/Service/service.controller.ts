import { NextFunction, Request, RequestHandler, Response } from "express";
import { serviceService } from "./service.service";
import { sendResponse } from "../../../share/sendResponse";
import { catchAsync } from "../../../share/catchAsync";


const serviceCreateFromDB =catchAsync(async(req:Request, res:Response)=>{
   const result = await serviceService.serviceCreateFromDB(req.body)
   sendResponse(res, {
        success:true,
        statusCode:201,
        message:"Service record created successfully",
        data: result
   })
})

const serviceGetFromDB =catchAsync(async(req:Request, res:Response)=>{
    const result = await serviceService.serviceGetFromDB()
    sendResponse(res, {
         success:true,
         statusCode:200,
         message:"Service records fetched successfully",
         data: result
    })
 })
 const serviceGetSingleFromDB =catchAsync(async(req:Request, res:Response)=>{
    const {id}=req.params
    const result = await serviceService.serviceGetSingleFromDB(id)
    console.log(result);
    sendResponse(res, {
         success:true,
         statusCode:200,
         message:"Service records fetched successfully",
         data: result
    })
 })
 const serviceUpdateFromDB =catchAsync(async(req:Request, res:Response)=>{
    const {id}=req.params
    const body = req.body
    console.log(body);
    const result = await serviceService.serviceUpdateFromDB(id,body)
    sendResponse(res, {
         success:true,
         statusCode:200,
         message:"Service marked as completed",
         data: result
    })
 })
 const serviceDeletedFromDB =catchAsync(async(req:Request, res:Response)=>{
    const {id}=req.params
      await serviceService.serviceDeletedFromDB(id)
    sendResponse(res, {
         success:true,
         statusCode:200,
         message:"services deleted successfully",
         data: null
    })
 })
 const overdueServicesGetFromDB =catchAsync(async(req:Request, res:Response)=>{
    const result = await serviceService.overdueServicesGetFromDB()
    sendResponse(res, {
         success:true,
         statusCode:200,
         message:"Overdue or pending services fetched successfully",
         data: result
    })
 })
export const serviceController ={
    serviceCreateFromDB,
    serviceGetFromDB,
    serviceGetSingleFromDB,
    serviceUpdateFromDB,
    serviceDeletedFromDB,
    overdueServicesGetFromDB
}