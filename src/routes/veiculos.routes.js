import { Router } from "express";
import { veiculoService } from "../services/veiculos.services.js"

const veiculoRouter = Router();
export default veiculoRouter

veiculoRouter.get ( "/", async (res) => {
    const veiculos = await veiculoService.getAll();
        return res.json(veiculos)
});

veiculoRouter.post("/", async (req, res) => {
    const veiculos = await veiculoService.create(req.body);
    return res.status(201).json(veiculos)
})