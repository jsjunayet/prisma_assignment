import { Bike } from "@prisma/client";
import { prisma } from "../../../share/prismaClient";
import { AppError } from "../../../share/appError";

const bikeCreateFromDB = async(payload:Bike)=>{
    const isExit = await prisma.customer.findUnique({
        where:{
            customerId:payload.customerId
        }
    })
    if (!isExit) {
        throw new AppError("bike not found", 404)
     }

    const result = await prisma.bike.create({
        data:payload
    })
    return result
 }
 const bikeGetFromDB = async()=>{
    const result = await prisma.bike.findMany()
    return result
 }
 const bikeGetSingleFromDB = async(id:string)=>{
  
    const result = await prisma.bike.findUnique({
        where:{
            bikeId:id
        }
    })
    if (!result) {
        throw new AppError("bike not found", 404)
     }
    return result
 }

export const bikeService ={
    bikeCreateFromDB,
    bikeGetFromDB,
    bikeGetSingleFromDB,
}