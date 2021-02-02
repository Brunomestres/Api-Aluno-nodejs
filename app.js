import dotenv from 'dotenv';

dotenv.config();
import express from 'express';
import homeRouter from './src/routes/homeRoutes';
import useRouter from './src/routes/userRoutes';
import tokenRouter from './src/routes/tokenRoutes';
import alunoRouter from './src/routes/alunoRoutes';
import fotoRouter from './src/routes/fotoRoutes';
import './src/database';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
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
