import 'dotenv/config';
import './repository/connection.js';
import express from 'express';
import cors from 'cors';
import roupasController from './controller/roupasController.js';

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.listen(process.env.PORT, () => console.log("API subiu"));

servidor.use('/', roupasController); // Registra o roupasController como middleware para a rota '/'
