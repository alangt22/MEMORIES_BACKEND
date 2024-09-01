const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./db/conn");
require('dotenv').config(); // Certifique-se de que as variáveis de ambiente estão carregadas

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Conectar ao banco de dados
connectToDatabase();

const PORT = process.env.PORT || 3000;

const memoryRoutes = require("./routes.js");

app.use("/memories", memoryRoutes);

app.listen(PORT, () => {
    console.log(`O servidor iniciou na porta ${PORT}`);
});

module.exports = app;
