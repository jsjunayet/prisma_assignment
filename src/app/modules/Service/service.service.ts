import { Service } from "@prisma/client";
import { prisma } from "../../../share/prismaClient";
import { AppError } from "../../../share/appError";
import {subDays} from "date-fns"
const serviceCreateFromDB = async(payload:Service)=>{
    const isExit = await prisma.bike.findUnique({
        where:{
            bikeId:payload.bikeId
        }
    })
    if (!isExit) {
        throw new AppError("bike not found", 404)
     }
    const result = await prisma.service.create({
        data:payload
    })
    return result
 }
 const serviceGetFromDB = async()=>{
    const result = await prisma.service.findMany()
    return result
 }
 const serviceGetSingleFromDB = async(id:string)=>{
  
    const result = await prisma.service.findUnique({
        where:{
            serviceId:id
        }
    })
    if (!result) {
        throw new AppError("service not found", 404)
     }
    return result
 }
 const serviceUpdateFromDB = async(id:string, payload:Partial<Service>)=>{
    const isExit = await prisma.service.findUnique({
        where:{
            serviceId:id
        }
    })
    if (!isExit) {
        throw new AppError("service not found", 404)
     }
    const result = await prisma.service.update({
        where:{
            serviceId:id
        },
        data:payload
    })
    return result
 }
 const serviceDeletedFromDB = async(id:string)=>{
    const isExit = await prisma.service.findUnique({
        where:{
            serviceId:id
        }
    })
    if (!isExit) {
       throw new AppError("service not found", 404)
    }
    const result = await prisma.service.delete({
        where:{
            serviceId:id
        }
    })
    return result
 }
 const overdueServicesGetFromDB = async()=>{
    const sevenDayAgo = subDays(new Date(), 7)
    const result = await prisma.service.findMany({
        where:{
            status:{
                in:['pending','in_progress']
            },
            serviceDate:{
                lt:sevenDayAgo
            }
        }
    })
    return result
 }
export const serviceService ={
    serviceCreateFromDB,
    serviceGetFromDB,
    serviceGetSingleFromDB,
    serviceUpdateFromDB,
    serviceDeletedFromDB,
    overdueServicesGetFromDB
}