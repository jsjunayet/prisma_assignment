import { NextFunction, Request, RequestHandler, Response } from "express";
import { customerService } from "./customer.service";
import { sendResponse } from "../../../share/sendResponse";
import { catchAsync } from "../../../share/catchAsync";


const customerCreateFromDB =catchAsync(async(req:Request, res:Response)=>{
   const result = await customerService.customerCreateFromDB(req.body)
   sendResponse(res, {
        success:true,
        statusCode:201,
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
 const customerGetSingleFromDB =catchAsync(async(req:Request, res:Response)=>{
    const {id}=req.params
    const result = await customerService.customerGetSingleFromDB(id)
    console.log(result);
    sendResponse(res, {
         success:true,
         statusCode:200,
         message:"Customer fetched successfully",
         data: result
    })
 })
 const customerUpdateFromDB =catchAsync(async(req:Request, res:Response)=>{
    const {id}=req.params
    const body = req.body
    console.log(body);
    const result = await customerService.customerUpdateFromDB(id,body)
    sendResponse(res, {
         success:true,
         statusCode:200,
         message:"Customer updated successfully",
         data: result
    })
 })
 const customerDeletedFromDB =catchAsync(async(req:Request, res:Response)=>{
    const {id}=req.params
      await customerService.customerDeletedFromDB(id)
    sendResponse(res, {
         success:true,
         statusCode:200,
         message:"Customer deleted successfully",
         data: null
    })
 })
export const customerController ={
    customerCreateFromDB,
    customerGetFromDB,
    customerGetSingleFromDB,
    customerUpdateFromDB,
    customerDeletedFromDB
}