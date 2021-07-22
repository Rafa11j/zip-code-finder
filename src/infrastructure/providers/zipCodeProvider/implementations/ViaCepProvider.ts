import { NotFoundZipCodeException } from '@domain/providers/zipCode/errors/NotFoundZipCodeException';
import { IZipCode } from '@domain/providers/zipCode/models/IZipCode';
import { IZipCodeProvider } from '@domain/providers/zipCode/providers/IZipCodeProvider';
import { viaCepApi } from '@infrastructure/services/viacep';

export class ViaCepProvider implements IZipCodeProvider {
  async findZipCode(zipCode: string): Promise<IZipCode> {
    try {
      const response = await viaCepApi.get<IZipCode>(`/${zipCode}/json`);

      if (response.data.erro) {
        throw new NotFoundZipCodeException();
      }

      return response.data;
    } catch {
      throw new NotFoundZipCodeException();
    }
  }
}
