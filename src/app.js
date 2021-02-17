import dotenv from 'dotenv';
import { resolve } from 'path';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();
import express from 'express';
import homeRouter from './routes/homeRoutes';
import useRouter from './routes/userRoutes';
import tokenRouter from './routes/tokenRoutes';
import alunoRouter from './routes/alunoRoutes';
import fotoRouter from './routes/fotoRoutes';
import './database';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRouter);
    this.app.use('/users', useRouter);
    this.app.use('/tokens', tokenRouter);
    this.app.use('/alunos', alunoRouter);
    this.app.use('/fotos', fotoRouter);
  }
}

export default new App().app;
