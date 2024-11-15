const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const bcrypt = require('bcrypt');
const path = require('path');
const cors = require('cors');

const app = express();
const jsonFilePath = path.join(__dirname, 'usuarios.json');
const saltRounds = 10;
app.use(cors())

let initialPath = path.join(__dirname, "..");

app.use(express.static(initialPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(initialPath, "index.html"));
});

app.use(express.json());
app.use(express.static('public'));

// cria a conta
app.post('/criarconta', (req, res) => {
    const { nome, email, senha } = req.body;

    console.log('Dados recebidos', req.body);

    if (!nome || !email || !senha) {
        return res.status(400).json('Preencha todos os campos!');
    }

    fs.readFile(jsonFilePath, 'utf-8', (err, data) => {
        if (err) return res.status(500).json('Erro ao acessar o servidor.');

        const users = data ? JSON.parse(data).usuarios : [];

        const userExists = users.find(user => user.email === email);
        if (userExists) {
            return res.status(400).json('Email já registrado!');
        }

        bcrypt.hash(senha, saltRounds, (err, hash) => {
            if (err) return res.status(500).json('Erro ao processar a senha.');

            users.push({nome, email, senha: hash});

            const updatedData = {usuarios: users};

            fs.writeFile(jsonFilePath, JSON.stringify(updatedData, null, 2), (err) => {
                if (err) return res.status(500).json('Erro ao salvar dados');
                res.json({message: 'Registro feito com sucesso!'});
            });
        });
    });
});
// loga a conta
app.post('/login', (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json('Preencha todos os campos!');
    }

    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) return res.status(500).json('Erro ao acessar o servidor');

        const users = data ? JSON.parse(data).usuarios : [];
        const user = users.find(user => user.email === email);

        if (!user) {
            return res.status(400).json('Usuário não encontrado');
        }

        bcrypt.compare(senha, user.senha, (err, result) => {
            if (err) return res.status(500).json('Erro ao verificar senha');
            if (result) {
                res.json({message: 'Login bem-sucedido', nome: user.nome});
            } else {
                res.status(400).json('Senha incorreta');
            }
        });
    });
});
//porta
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});