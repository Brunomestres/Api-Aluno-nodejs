import { Router } from 'express';
import multer from 'multer';
import fotoController from '../controllers/FotoController';
import multerConfig from '../config/multer';

const router = new Router();
const upload = multer(multerConfig);

router.post('/', upload.single('image'), fotoController.store);

export default router;
