import { Router } from 'express';
import { zipCodeRoutes } from './zipCode/routes';

const routes = Router();

const prefix = '/api';

routes.use(`${prefix}/zip-code`, zipCodeRoutes);

export { routes };
