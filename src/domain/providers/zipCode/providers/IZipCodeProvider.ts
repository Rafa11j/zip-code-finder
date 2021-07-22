import { IZipCode } from '../models/IZipCode';

export interface IZipCodeProvider {
  findZipCode(zipCode: string): Promise<IZipCode>;
}
