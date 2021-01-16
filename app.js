import dotenv from 'dotenv';

dotenv.config();
import express from 'express';
import homeRouter from './src/routes/homeRoutes';
import useRouter from './src/routes/userRoutes';
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
  }
}

export default new App().app;
