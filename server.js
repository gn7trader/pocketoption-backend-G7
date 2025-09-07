import express from "express";
import bodyParser from "body-parser";

// Rotas
import saldoRouter from "./src/routes/saldo.js";
import tradesRouter from "./src/routes/trades.js";

const app = express();
app.use(bodyParser.json());

// Rota de teste
app.get("/", (req, res) => {
  res.send("🚀 Backend PocketOption rodando no Render!");
});

// Usando as rotas importadas
app.use("/saldo", saldoRouter);
app.use("/trades", tradesRouter);

// Porta dinâmica para Render
app.listen(process.env.PORT || 8000, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 8000}`);
});
