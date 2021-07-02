const express = require('express');
const { validateRequestSchema } = require('../middleware/validateRequestSchema');
const { updateMe, updatePwdSchema } = require('../schema/authUserSchema');
const { createEnrollmentSchema, updateEnrollmentSchema } = require('../schema/enrollmentSchema');

// DEFINE ROUTER
const userRouter = express.Router();
// CONTROLLERS
const userController = require('../controller/userController');
const authController = require('../controller/authController');

// APPLY MIDDLEWARE'S
userRouter.use(authController.protect, authController.restrictTo('admin', 'student'));

// ROUTES FOR AUTHENTICATED USERS
userRouter.patch('/updateMyPassword', updatePwdSchema, validateRequestSchema, userController.updateMyPassword);
userRouter.patch('/updateMe', updateMe, validateRequestSchema, userController.updateMe);
userRouter.delete('/deleteMe', userController.deleteMe);

// APPLY MIDDLEWARE'S
userRouter.use(authController.protect);

userRouter.get('/enrollment', userController.getEnrollment);
userRouter.post('/enrollment', createEnrollmentSchema, validateRequestSchema, userController.createEnrollment);
userRouter.patch('/enrollment/:id', updateEnrollmentSchema, validateRequestSchema, userController.updateEnrollemnt);
userRouter.delete('/enrollment/:id', userController.deleteEnrollment);

userRouter.get('/studentAllocation', userController.studentAllocation);

module.exports = userRouter;