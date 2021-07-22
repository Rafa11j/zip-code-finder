import { container } from 'tsyringe';
import { IZipCodeProvider } from '@domain/providers/zipCode/providers/IZipCodeProvider';
import { ViaCepProvider } from '@infrastructure/providers/zipCodeProvider/implementations/ViaCepProvider';

container.registerSingleton<IZipCodeProvider>(
  'ZipCodeProvider',
  ViaCepProvider,
);
