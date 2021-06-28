const express = require('express');
const { validateRequestSchema } = require('../middleware/validateRequestSchema');
const { registerSchema, loginSchema, forgotPasswordSchema, resetPasswordSchema } = require('../schema/authSchema');

// CONTROLLERS
const authController = require('../controller/authController');

// DEFINE ROUTER
const authRouter = express.Router();

// AUTH ROUTES
authRouter.post('/register', registerSchema, validateRequestSchema, authController.signUp);
authRouter.post('/login', loginSchema, validateRequestSchema, authController.login);
authRouter.get('/checkLogin', authController.checkLogIn);
authRouter.post('/forgotPassword', forgotPasswordSchema, validateRequestSchema, authController.forgotPassword);
authRouter.patch('/resetPassword/:token', resetPasswordSchema, validateRequestSchema, authController.resetPassword);
authRouter.get('/logOut', authController.logOut);

module.exports = authRouter;