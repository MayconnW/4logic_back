import { Router } from 'express';
import researchRouter from 'modules/research/infra/http/routes/research.routes';
import usersRouter from 'modules/users/infra/http/routes/users.routes';
import sessionsRouter from 'modules/users/infra/http/routes/sessions.routes';
import storageRouter from 'modules/storage/infra/http/routes/storage.routes';
import customersRouter from 'modules/customers/infra/http/routes/customers.routes';

const routes = Router();

routes.use('/sessions', sessionsRouter);
routes.use('/research', researchRouter);
routes.use('/users', usersRouter);
routes.use('/storage', storageRouter);
routes.use('/customers', customersRouter);

export default routes;
