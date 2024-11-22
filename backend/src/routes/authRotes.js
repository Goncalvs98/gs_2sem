// backend/src/routes/authRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Usuário e senha são obrigatórios.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ username, password: hashedPassword });
    res.status(201).json({ message: 'Usuário registrado com sucesso!', user });
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ error: 'Usuário já existe.' });
    }
    res.status(500).json({ error: 'Erro ao registrar usuário.' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Usuário e senha são obrigatórios.' });
    }

    // Verifica se o usuário existe
    const user = await User.findOne({ where: { username } });
    if (!user) {
      console.error('Usuário não encontrado:', username); // Log para depuração
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }

    // Verifica se a senha está correta
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      console.error('Senha incorreta para usuário:', username); // Log para depuração
      return res.status(401).json({ error: 'Credenciais inválidas.' });
    }

    // Gera o token JWT
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ message: 'Login bem-sucedido', token });
  } catch (err) {
    console.error('Erro no login:', err); // Log para depuração
    res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

module.exports = router;
