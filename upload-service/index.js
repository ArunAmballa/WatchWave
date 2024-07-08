import express from "express";
import router from "./routes/upload.route.js";
import dotenv from "dotenv"
import cors from "cors";


const app=express();
dotenv.config();

const PORT=process.env.PORT || 8080;

app.use(cors({
    allowedHeaders: ["*"],
    origin: "*"
 }));

 
app.use(express.json())

app.use("/upload",router)



app.listen(PORT,()=>{
    console.log(`Server is Listening on Port  ${PORT}`)
})

