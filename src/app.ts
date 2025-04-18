import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from './app/modules/Customer/customer.route';
import { GlobalErrorHandle } from './app/modules/MiddleWare/globalErrorHandle';
const app:Application = express()

app.use(cors())
app.use(express.json()),

app.get('/', (req:Request, res:Response)=>{
    res.send({message:"Assinment-7 start !"})
})
app.use('/api/v1', router)
app.use(GlobalErrorHandle)

app.use((req:Request, res:Response, next:NextFunction)=>{
    res.status(404).json({
        success:false,
        message:"This Route Not Found",
        error:{
            path:req.originalUrl,
            message:"You Requested Path Not Found!!!"
        }
    })
})

export default app
