import { Request, Response } from "express";
import { customerService } from "./customer.service";

const customerCreateFromDB = async(req:Request, res:Response)=>{
    try{
   const result = await customerService.customerCreateFromDB(req.body)
    res.status(200).json({
        success:true,
        message:"customer create Sucessfully!",
        data: result
    })

    }catch(err){
        console.log(err);
    }
   
}
export const customerController ={
    customerCreateFromDB
}