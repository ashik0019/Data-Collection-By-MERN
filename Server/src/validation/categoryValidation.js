import Joi from 'joi';

const schema = Joi.object().keys(
  {
    name: Joi.string().required(),
    icon: Joi.string(),
    status: Joi.string().valid('active', 'inactive'),
  },
);

const validate = (data) => {
  const result = schema.validate(data);
  result.value = data;
  return result;
};

export default validate;