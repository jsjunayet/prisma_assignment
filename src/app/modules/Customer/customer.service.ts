import { Customer } from "@prisma/client";

import { PrismaClient } from '@prisma/client'
let prisma = new PrismaClient()
const customerCreateFromDB = async(payload:Customer)=>{
    const result = await prisma.customer.create({
        data:payload
    })
    return result
 }
export const customerService ={
    customerCreateFromDB
}