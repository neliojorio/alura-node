import express from "express";
import db from "./config/dbConnect.js";
import manipulador404 from "./middlewares/manipulador404.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão com MongoDB"));
db.once("open", () => { 
    console.log("MongoDB conectado com sucesso!");
});

const app = express();
app.use(express.json());
routes(app);

app.use(manipulador404);

// eslint-disable-next-line no-unused-vars
app.use(manipuladorDeErros);

export default app;