import { Service } from "@prisma/client";
import { prisma } from "../../../share/prismaClient";

const serviceCreateFromDB = async(payload:Service)=>{
    const result = await prisma.service.create({
        data:payload
    })
    return result
 }
export const serviceService ={
    serviceCreateFromDB
}