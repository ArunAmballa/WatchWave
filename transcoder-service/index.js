import express from "express"
import dotenv from "dotenv"
import cors from "cors";
import KafkaConfig from "./kafka/kafka.js";
import convertToHLS from "./hls/transcode.js";
import s3ToS3 from "./hls/s3ToS3.js";

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

 app.get("/transcode",(req,res)=>{
//    convertToHLS()
        s3ToS3();
   res.send('hello')
 })

// const kafkaconfig =  new KafkaConfig()
// kafkaconfig.consume("transcode", (value)=>{
//    console.log("got data from kafka : " , value)
// })

const kafkaconfig = new KafkaConfig()
kafkaconfig.consume("transcode", async (message) => {
   try {
       console.log("Got data from Kafka:", message);
      
       // Parsing JSON message value
       const value = JSON.parse(message);
       console.log("value",value)
      
       // Checking if value and filename exist
       if (value && value.filename) {
           console.log("Filename is", value.filename);
           await s3ToS3(value.filename); // Make this change in controller
       } else {
           console.log("Didn't receive filename to be picked from S3");
       }
   } catch (error) {
       console.error("Error processing Kafka message:", error);
       // You might want to handle or log this error appropriately
   }
});



app.listen(PORT,()=>{
    console.log(`Server is Listening on PORT ${PORT}`);
})
