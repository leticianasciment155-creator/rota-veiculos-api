import veiculoRouter from "./routes/veiculos.routes.js";
import express from "express";

const app = express()
const port = 3000

app.use(express.json())
app.use('/veiculos', veiculoRouter)

app.listen(port, () =>
    console.log(`App rodando em http://localhost:3000`)
)