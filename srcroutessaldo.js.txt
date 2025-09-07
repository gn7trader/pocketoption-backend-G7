import { Router } from "express";
import { getSaldo } from "../services/pocketOptionWS.js";

const router = Router();

router.post("/", (req, res) => {
  const { ssid } = req.body;
  const saldo = getSaldo(ssid);
  res.json(saldo);
});

export default router;
