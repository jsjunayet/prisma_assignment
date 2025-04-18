import { Customer } from "@prisma/client";
import { prisma } from "../../../share/prismaClient";

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

export const customerService ={
    customerCreateFromDB,
    customerGetFromDB
}