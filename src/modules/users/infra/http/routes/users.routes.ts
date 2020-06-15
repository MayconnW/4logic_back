import { Router } from 'express';
import authMiddleware from 'shared/infra/http/middlewares/auth';
import UserController from '../controllers/UserController';

const usersRouter = Router();

usersRouter.post('/', UserController.create);
usersRouter.get('/', UserController.index);
usersRouter.use(authMiddleware);
// usersRouter.put('/', UserController.update);

export default usersRouter;
