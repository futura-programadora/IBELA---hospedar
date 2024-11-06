import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use(cors());

// Rota para criar um novo usuário
app.post('/usuarios', async (req, res) => {
    const { email, name, address } = req.body;
    const existingUser = await prisma.user.findFirst({ where: { email } });

    if (existingUser) {
        return res.status(400).json({ message: 'Usuário já cadastrado.' });
    }

    await prisma.user.create({
        data: { email, name, address },
    });

    res.status(201).json({ message: 'Usuário criado com sucesso', data: { email, name, address } });
});

// Rota para login de administrador
app.post('/admin/login', async (req, res) => {
    const { email, address } = req.body;

    const admin = await prisma.admin.findFirst({
        where: {
            email,
            address,
        }
    });

    if (!admin) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    res.status(200).json({ message: 'Login de administrador bem-sucedido', admin });
});

// Rota para login de usuário
app.post('/usuario/login', async (req, res) => {
    const { email, address } = req.body;

    const user = await prisma.user.findFirst({
        where: {
            email,
            address,
        }
    });

    if (!user) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    res.status(200).json({ message: 'Login de usuário bem-sucedido', user });
});

// Rota para registrar administrador
app.post('/admin/register', async (req, res) => {
    const { email, address } = req.body;

    const existingAdmin = await prisma.admin.findFirst({ where: { email } });

    if (existingAdmin) {
        return res.status(400).json({ message: 'E-mail já em uso.' });
    }

    const newAdmin = await prisma.admin.create({
        data: { email, address },
    });

    res.status(201).json({ message: 'Administrador registrado com sucesso', admin: newAdmin });
});

// Rota para obter todos os usuários
app.get('/usuarios', async (req, res) => {
    let users;
    if (req.query) {
        users = await prisma.user.findMany({
            where: { name: req.query.name },
        });
    } else {
        users = await prisma.user.findMany();
    }
    res.status(200).json(users);
});

// Rota para atualizar um usuário
app.put('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    const { email, name, address } = req.body;

    await prisma.user.update({
        where: { id },
        data: { email, name, address },
    });

    res.status(201).json({ message: 'Usuário atualizado com sucesso', data: { email, name, address } });
});

// Rota para deletar um usuário
app.delete('/usuarios/:id', async (req, res) => {
    const { id } = req.params;

    await prisma.user.delete({
        where: { id },
    });

    res.status(200).json({ message: 'Usuário deletado com sucesso' });
});

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
