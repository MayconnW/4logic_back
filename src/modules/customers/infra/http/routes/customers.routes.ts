import { Router } from 'express';
import authMiddleware from 'shared/infra/http/middlewares/auth';
import CustomersController from '../controllers/CustomersController';

const customersRouter = Router();

customersRouter.use(authMiddleware);
customersRouter.post('/', CustomersController.create);
customersRouter.get('/', CustomersController.index);
customersRouter.get('/:id', CustomersController.show);
// customersRouter.put('/', CustomersController.update);

export default customersRouter;
