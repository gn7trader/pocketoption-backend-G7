import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import saldoRoutes from "./src/routes/saldo.js";
import tradesRoutes from "./src/routes/trades.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use("/api/saldo", saldoRoutes);
app.use("/api/trades", tradesRoutes);

// Rota raiz
app.get("/", (req, res) => {
  res.send("🚀 PocketOption Backend rodando!");
});

// Porta
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
