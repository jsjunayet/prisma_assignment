import { Bike } from "@prisma/client";
import { prisma } from "../../../share/prismaClient";

const bikeCreateFromDB = async(payload:Bike)=>{
    const result = await prisma.bike.create({
        data:payload
    })
    return result
 }
export const bikeService ={
    bikeCreateFromDB
}