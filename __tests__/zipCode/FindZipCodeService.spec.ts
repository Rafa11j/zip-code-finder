import 'reflect-metadata';
import { FindZipCodeService } from '@application/zipCode/useCases/FindZipCodeService';
import { ZipCodeProviderMock } from '@domain/providers/zipCode/mocks/ZipCodeProviderMock';
import { InvalidZipCodeException } from '@domain/providers/zipCode/errors/InvalidZipCodeException';

let zipCodeProvider: ZipCodeProviderMock;
let findZipCode: FindZipCodeService;

describe('FindZipCodeService', () => {
  beforeEach(() => {
    zipCodeProvider = new ZipCodeProviderMock();
    findZipCode = new FindZipCodeService(zipCodeProvider);
  });

  it('shold be able to find a address by zip code.', async () => {
    const address = await findZipCode.execute({ zipCode: '01001000' });

    expect(address.bairro).not.toBeNull();
    expect(address.cep).not.toBeNull();
    expect(address.localidade).not.toBeNull();
    expect(address.gia).not.toBeNull();
    expect(address.ibge).not.toBeNull();
    expect(address.logradouro).not.toBeNull();
  });

  it('shold not be able to find an address with a zip code with the number of digits other than 8.', async () => {
    await expect(
      findZipCode.execute({ zipCode: '01001' }),
    ).rejects.toBeInstanceOf(InvalidZipCodeException);
  });

  it('shold not be able to find an address with a non zip code.', async () => {
    await expect(
      findZipCode.execute({ zipCode: 'abc' }),
    ).rejects.toBeInstanceOf(InvalidZipCodeException);
  });
});
