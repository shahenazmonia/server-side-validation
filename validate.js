const Joi = require('joi');
const validate = (validateCheck) => (req, res, next) => {
  const expectedKeys = Object.keys(validateCheck);
  const objectValidate = expectedKeys.reduce((accum, curr) => {
    accum[curr] = req[curr];

    return accum;
  }, {});
  const validateStatus = Joi.validate(objectValidate, validateCheck, { abortEarly: false });
  if (validateStatus.error)
    res.status(200).json({ err: validateStatus.error.details[0].message });
  else next();
};
module.exports = validate
