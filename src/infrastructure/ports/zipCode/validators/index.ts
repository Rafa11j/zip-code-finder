import { celebrate, Joi, Segments } from 'celebrate';

export const findZipCodeValidator = celebrate({
  [Segments.PARAMS]: {
    zipCode: Joi.string()
      .length(8)
      .pattern(/^[0-9]+$/)
      .required(),
  },
});
