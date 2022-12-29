import Joi from 'joi';

const schema = Joi.object().keys(
  {
    name: Joi.string().required().min(3),
    number: Joi.string().trim().regex(/^\+8801[13-9]\d{8}$/)
      .max(14)
      .required(),
    role: Joi.string().required().valid('admin', 'staff'),
  },
);

const validate = (data) => {
  const result = schema.validate(data);
  result.value = data;
  return result;
};

export default validate;