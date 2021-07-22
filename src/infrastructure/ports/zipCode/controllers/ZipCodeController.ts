import { FindZipCodeService } from '@application/zipCode/useCases/FindZipCodeService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class ZipCodeController {
  async find(request: Request, response: Response): Promise<Response> {
    const { zipCode } = request.params;
    const service = container.resolve(FindZipCodeService);
    const zipCodeResponse = await service.execute({
      zipCode,
    });

    return response.json(zipCodeResponse);
  }
}
