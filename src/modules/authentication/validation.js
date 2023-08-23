const Joi = require("joi");
const { FieldError } = require("../../utils/error");

module.exports = {
  registerAUser: (req, res, next) => {
    const sign_up_schema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string()
        .required()
        .min(6)
        .pattern(new RegExp("^[a-zA-Z0-9]{6,30}$")),
    });

    const { error } = sign_up_schema.validate(req.body);
    if (error) throw error;
    next();
  },

  log_in_user: (req, res, next) => {
    let login_schema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });

    const { error } = login_schema.validate(req.body);
    if (error) {
      throw error;
    }

    next();
  },
};
