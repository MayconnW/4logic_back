import { Router } from 'express';
import multer from 'multer';
import authMiddleware from 'shared/infra/http/middlewares/auth';
import uploadConfig from 'config/upload';
import StorageController from '../controllers/StorageController';

const storageRouter = Router();
const upload = multer(uploadConfig);
storageRouter.use(authMiddleware);

storageRouter.post('/', upload.single('file'), StorageController.create);

export default storageRouter;
