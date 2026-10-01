import { pool } from "../config/database.js";

class VeiculoService{
    async getAll() {
        const res = await pool.query("SELECT * FROM veiculos");
        return res.rows;
    }
    async create(dados) {
        const res = await pool.query("INSERT INTO veiculos RETURNING *", [dados]);
        return res.rows[0];
    }
}

export const veiculoService = new VeiculoService();