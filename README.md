# 📈 PocketOption Backend

Backend em **Node.js + Express** para integração com a **API WebSocket da PocketOption**.  
Atualmente está configurado com rotas REST simuladas de **saldo** e **trades**, prontas para evoluir para chamadas reais ao WebSocket.

---

## 🚀 Tecnologias
- Node.js
- Express
- Body-Parser
- CORS
- Socket.IO Client + WS
- Dotenv
- Nodemon (dev)

---

## 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/seuusuario/pocketoption-backend.git
cd pocketoption-backend

Instale as dependências:

npm install

▶️ Executar localmente

Rodar em desenvolvimento (com hot reload via nodemon):

npm run dev


Rodar em produção:

npm start


O servidor será iniciado em:

http://localhost:8000

🌍 Endpoints disponíveis
🔹 Teste do servidor

GET /

curl http://localhost:8000/


Resposta:

🚀 PocketOption Backend rodando!

🔹 Buscar saldo

POST /api/saldo

curl -X POST http://localhost:8000/api/saldo \
  -H "Content-Type: application/json" \
  -d '{"ssid": "123abc"}'


Resposta simulada:

{
  "saldo": 1000,
  "ssidRecebido": "123abc"
}

🔹 Enviar trade

POST /api/trades

curl -X POST http://localhost:8000/api/trades \
  -H "Content-Type: application/json" \
  -d '{"ssid": "123abc", "trade": {"ativo":"EURUSD","valor":50,"direcao":"CALL"}}'


Resposta simulada:

{
  "status": "ok",
  "trade": {
    "ativo": "EURUSD",
    "valor": 50,
    "direcao": "CALL"
  }
}

☁️ Deploy em nuvem
🔹 Railway

Acesse Railway
.

Crie um novo projeto.

Conecte o repositório GitHub.

Configure o comando de start como:

npm start


Deploy será iniciado automaticamente.

🔹 Heroku

Instale o Heroku CLI
.

No terminal, faça login:

heroku login


Crie o app:

heroku create pocketoption-backend


Faça o deploy:

git push heroku main

⚡ Observação Importante

Os endpoints /api/saldo e /api/trades estão simulados.
Para funcionamento real, é necessário implementar as mensagens corretas do protocolo WebSocket da PocketOption (autenticação com SSID, comandos de saldo, abertura de ordens etc).

📜 Licença

Livre para uso e modificação 🚀


---

👉 Esse README já cobre **instalação, execução local, deploy, endpoints de teste e observação sobre a integração real**.  

Quer que eu também monte um **exemplo em JavaScript (usando `fetch` ou `axios`)** para você consumir essa API direto do frontend?
