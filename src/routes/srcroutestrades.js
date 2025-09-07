import { Router } from "express";
import { sendTrade } from "../services/pocketOptionWS.js";

const router = Router();

router.post("/", (req, res) => {
  const { ssid, trade } = req.body;
  const resultado = sendTrade(ssid, trade);
  res.json(resultado);
});

export default router;
