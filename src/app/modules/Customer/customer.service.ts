import { Customer } from "@prisma/client";
import { prisma } from "../../../share/prismaClient";
import { AppError } from "../../../share/appError";

const customerCreateFromDB = async(payload:Customer)=>{
    const result = await prisma.customer.create({
        data:payload
    })
    return result
 }
 const customerGetFromDB = async()=>{
    const result = await prisma.customer.findMany()
    return result
 }
 const customerGetSingleFromDB = async(id:string)=>{
  
    const result = await prisma.customer.findUnique({
        where:{
            customerId:id
        }
    })
    if (!result) {
        throw new AppError("Customer not found", 404)
     }
    return result
 }
 const customerUpdateFromDB = async(id:string, payload:Partial<Customer>)=>{
    const isExit = await prisma.customer.findUnique({
        where:{
            customerId:id
        }
    })
    if (!isExit) {
        throw new AppError("Customer not found", 404)
     }
    const result = await prisma.customer.update({
        where:{
            customerId:id
        },
        data:payload
    })
    return result
 }
 const customerDeletedFromDB = async(id:string)=>{
    const isExit = await prisma.customer.findUnique({
        where:{
            customerId:id
        }
    })
    if (!isExit) {
       throw new AppError("Customer not found", 404)
    }
    const result = await prisma.customer.delete({
        where:{
            customerId:id
        }
    })
    return result
 }
export const customerService ={
    customerCreateFromDB,
    customerGetFromDB,
    customerGetSingleFromDB,
    customerUpdateFromDB,
    customerDeletedFromDB
}