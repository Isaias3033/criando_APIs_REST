import express from 'express';
import db from '../db.js';

const router = express.Router();

router.post('/cadastro', (req, res) => {
    const { nome, email } = req.body;

    const sql = 'INSERT INTO usuarios (nome, email) VALUES (?, ?)';
    db.query(sql, [nome, email], (err, result) => {
        if (err) return res.status(500).json({ erro: 'Erro ao cadastrar' });

        res.status(201).json({ id: result.insertId, nome, email });
    });
});

export default router;
