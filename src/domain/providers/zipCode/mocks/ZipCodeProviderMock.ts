import { IZipCode } from '../models/IZipCode';
import { IZipCodeProvider } from '../providers/IZipCodeProvider';

export class ZipCodeProviderMock implements IZipCodeProvider {
  async findZipCode(zipCode: string): Promise<IZipCode> {
    return {
      cep: '01001-000',
      logradouro: 'Praça da Sé',
      complemento: 'lado ímpar',
      bairro: 'Sé',
      localidade: 'São Paulo',
      uf: 'SP',
      ibge: '3550308',
      gia: '1004',
      ddd: '11',
      siafi: '7107',
    };
  }
}
