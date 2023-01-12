import Joi from 'joi';

const schema = Joi.object().keys(
  {
    role: Joi.string(),    
    name: Joi.string().min(2).max(20).required(),
    email: Joi.string().email().required(),
    mobile: Joi.string().min(11).max(12).required(),
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.ref('password'),
  },
);
const validate = (data) => {
  const result = schema.validate(data);
  result.value = data;
  return result;
};

export default validate;
