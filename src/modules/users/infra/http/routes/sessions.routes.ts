import { Router } from 'express';
import authMiddleware from 'shared/infra/http/middlewares/auth';
import SessionController from '../controllers/SessionController';

const sessionsRouter = Router();

sessionsRouter.post('/', SessionController.create);
sessionsRouter.use(authMiddleware);
sessionsRouter.get('/', SessionController.index);

export default sessionsRouter;
