const Joi = require('joi');

const signupValidation = {
body: {
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required().regex(/^[a-zA-Z0-9]{3,30}$/),
  confirmPassword: Joi.string().required()
  .valid(Joi.ref('password')
  // .option({language:{any:{allowOnly:'Password not match'}}})
),
  role: Joi.string().valid(['admin','user']).required(),
  mobile: Joi.number(),
  }
};

module.exports = {
  signupValidation
}
