import { Bike } from "@prisma/client";
import { prisma } from "../../../share/prismaClient";
import { AppError } from "../../../share/appError";

const bikeCreateFromDB = async(payload:Bike)=>{
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