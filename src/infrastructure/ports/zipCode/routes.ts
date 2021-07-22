import { Router } from 'express';
import { ZipCodeController } from './controllers/ZipCodeController';
import { findZipCodeValidator } from './validators';

const zipCodeRoutes = Router();
const zipCodeController = new ZipCodeController();

zipCodeRoutes.get('/:zipCode', findZipCodeValidator, zipCodeController.find);

export { zipCodeRoutes };
