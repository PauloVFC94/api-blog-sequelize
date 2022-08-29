const joi = require('joi');

const ANY_REQUIRED = 'Some required fields are missing';
const STRING_MIN = '{#label} length must be at least {#limit} characters long';
const NOT_FOUND = '{#label} not found';

const loginSchema = joi.object({
  email: joi.string().required().messages({
    'any.required': ANY_REQUIRED,
  }),
  password: joi.string().required().messages({
    'any.required': ANY_REQUIRED,
  }),
});

const userSchema = joi.object({
  displayName: joi.string().required().min(8).messages({
    'string.min': STRING_MIN,
    'any.required': ANY_REQUIRED,
  }),
  email: joi.string().email().required().messages({
    'any.required': ANY_REQUIRED,
    'string.email': '{#label} must be a valid email',
  }),
  password: joi.string().required().min(6).messages({
    'string.min': STRING_MIN,
    'any.required': ANY_REQUIRED,
  }),
  image: joi.string().required().messages({
    'any.required': ANY_REQUIRED,
  }),
});

const categorySchema = joi.object({
  name: joi.string().required().messages({
    'any.required': '{#label} is required',
  }),
});

const postSchema = joi.object({
  title: joi.string().required().messages({
    'any.required': ANY_REQUIRED,
    'string.empty': ANY_REQUIRED,
  }),
  content: joi.string().required().messages({
    'any.required': ANY_REQUIRED,
    'string.empty': ANY_REQUIRED,
  }),
  categoryIds: joi.array().min(1).required().messages({
    'array.min': NOT_FOUND,
    'any.required': NOT_FOUND,
  }),
});

module.exports = { loginSchema, userSchema, categorySchema, postSchema };