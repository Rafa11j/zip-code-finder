import { AppError } from '@domain/errors/models/AppError';

export class InvalidZipCodeException extends AppError {
  constructor() {
    super('Zip Code Invalid!');
  }
}
