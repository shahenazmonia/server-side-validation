const Joi = require('joi');

const loginValidation = {
  body:{
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  }
};

const signupValidation = {
body: {
  // write signup validation here
  }
};


module.exports = {
  loginValidation,
  signupValidation
}
