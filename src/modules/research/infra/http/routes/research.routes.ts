import { Router } from 'express';
import authMiddleware from 'shared/infra/http/middlewares/auth';
import ResearchController from '../controllers/ResearchController';

const ResearchRouter = Router();
ResearchRouter.use(authMiddleware);
ResearchRouter.post('/', ResearchController.create);
ResearchRouter.get('/', ResearchController.index);

export default ResearchRouter;
