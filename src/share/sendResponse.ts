import { Response } from "express"

export const sendResponse = <T>(res:Response, json:{
    success:boolean,
    statusCode:number,
    message:string
    data: T | null | undefined
})=>{
    res.status(json.statusCode).json({
        success:json.success,
        message:json.message,
        data:json.data || null || undefined
    })
}