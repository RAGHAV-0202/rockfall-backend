import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import ApiResponse from "./utils/apiResponse.js"

import SOSRouter from "./routes/sos.routes.js"

const app = express();
app.use(express.json({limit : "100kb"}))
app.use(express.urlencoded({extended : true , limit : "16kb"}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));    


const corsOptions = {
    origin: ['http://localhost:5000' , 'https://raghav-0202.github.io'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
    credentials: true ,
    sameSite: 'None'
};
app.use(cors(corsOptions));
app.use(cookieParser());

app.get("/" , async(req,res)=>{
    res.status(200).json(new ApiResponse(200 , "Server is live"))
})


app.use("/api/v1/sos" , SOSRouter)

export default app