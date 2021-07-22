import { AppError } from '@domain/errors/models/AppError';
import { Request, Response, NextFunction } from 'express';

export const globalException = (
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction,
): Response => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }

  return response
    .status(500)
    .json({ status: 'error', message: 'Internal server error' });
};
