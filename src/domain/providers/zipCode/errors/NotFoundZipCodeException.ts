import { AppError } from '@domain/errors/models/AppError';

export class NotFoundZipCodeException extends AppError {
  constructor() {
    super('Zip Code Not found!');
  }
}
