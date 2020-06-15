import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import uploadConfig from 'config/upload';
import routes from './routes';
import handleErrorMiddleware from './middlewares/handleError';

import '../typeorm';
import 'shared/container';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);
app.use(handleErrorMiddleware);

app.listen(3333, () => console.log('Server Started'));
