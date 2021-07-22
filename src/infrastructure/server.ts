import 'reflect-metadata';
import 'express-async-errors';
import './config/env';
import { errors } from 'celebrate';
import express from 'express';
import cors from 'cors';
import './container';
import { globalException } from './middlewares/exception';
import { routes } from './ports';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errors());
app.use(globalException);

export { app };
