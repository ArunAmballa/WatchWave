import express from "express"
import dotenv from "dotenv"
import cors from "cors";
import KafkaConfig from "./kafka/kafka.js";
const app=express();

dotenv.config();

const PORT=process.env.PORT || 8080;

app.use(cors({
    allowedHeaders: ["*"],
    origin: "*"
 }));

 app.use(express.json())

 app.get("/",(req,res)=>{
    res.send("WatchWave Transcoder Service");
 })

const kafkaconfig =  new KafkaConfig()
kafkaconfig.consume("transcode", (value)=>{
   console.log("got data from kafka : " , value)
})


app.listen(PORT,()=>{
    console.log(`Server is Listening on PORT ${PORT}`);
})
