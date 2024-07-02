import express from "express"
import sendMessageToKafka from "../controller/kafkapublisher.controller.js";

const router = express.Router();

router.post('/', sendMessageToKafka);

export default router;