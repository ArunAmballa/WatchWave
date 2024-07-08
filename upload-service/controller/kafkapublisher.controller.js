import KafkaConfig from "../kafka/kafka.js";

export const pushVideoForEncodingToKafka = async(title,res)=>{

    try {
        const message = {
            "filename":title,
        }
        console.log("body : ", message)
        const kafkaconfig = new KafkaConfig()
        const msgs = [
            {
                key: "video",
                value: JSON.stringify(message)
            }
        ]
        const result = await kafkaconfig.produce("transcode", msgs)
        res.status(200).json("message uploaded successfully")
 
    } catch (error) {
        console.log(error)
    }

}