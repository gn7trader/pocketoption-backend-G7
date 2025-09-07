import { io } from "socket.io-client";

const WS_URL = "wss://api-in.pocketoption.com:8095/socket.io/?EIO=3&transport=websocket";

const socket = io(WS_URL, {
  transports: ["websocket"],
  reconnectionAttempts: 5,
  timeout: 5000
});

socket.on("connect", () => {
  console.log("✅ Conectado ao WebSocket da PocketOption");
});

socket.on("connect_error", (err) => {
  console.error("❌ Erro de conexão WS:", err.message);
});

socket.on("disconnect", () => {
  console.warn("⚠️ Desconectado do WebSocket");
});

// Funções de exemplo (precisam ser adaptadas ao protocolo real da PocketOption)
export const getSaldo = (ssid) => {
  return { saldo: 1000, ssidRecebido: ssid };
};

export const sendTrade = (ssid, tradeData) => {
  console.log("📤 Enviando ordem (simulado):", tradeData);
  return { status: "ok", trade: tradeData };
};

export default socket;
