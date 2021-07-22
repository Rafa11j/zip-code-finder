import { InvalidZipCodeException } from '@domain/providers/zipCode/errors/InvalidZipCodeException';
import { IZipCode } from '@domain/providers/zipCode/models/IZipCode';
import { IZipCodeProvider } from '@domain/providers/zipCode/providers/IZipCodeProvider';
import { inject, injectable } from 'tsyringe';
import { IFindZipCodeRequest } from '../dtos/IFindZipCode';

@injectable()
export class FindZipCodeService {
  constructor(
    @inject('ZipCodeProvider')
    private zipCodeProvider: IZipCodeProvider,
  ) {}

  async execute({ zipCode }: IFindZipCodeRequest): Promise<IZipCode> {
    const verifyZipCode = zipCode.match(/^[0-9]+$/);

    if (!verifyZipCode) {
      throw new InvalidZipCodeException();
    }

    const zipCodeFormated = verifyZipCode.join('');

    if (zipCodeFormated.length !== 8) {
      throw new InvalidZipCodeException();
    }

    const response = await this.zipCodeProvider.findZipCode(zipCodeFormated);

    return response;
  }
}
