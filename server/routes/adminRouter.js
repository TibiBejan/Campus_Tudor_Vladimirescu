const express = require('express');
const { createUserSchema, updateUserSchema } = require('../schema/adminSchema');
const { validateRequestSchema } = require('../middleware/validateRequestSchema');

// DEFINE ROUTER
const adminRouter = express.Router();
// CONTROLLERS
const adminController = require('../controller/adminController');
const authController = require('../controller/authController');
// APPLY MIDDLEWARE'S
adminRouter.use(authController.protect, authController.restrictTo('admin'));

// ROUTES
adminRouter.route('/api/v1/search-users/')
    .get(adminController.getUsersByQuerry);
adminRouter.route('/api/v1/users/')
    .get(adminController.getAllUsers)
    .post(createUserSchema, validateRequestSchema, adminController.createUser);

adminRouter.route('/api/v1/users/:id')
    .get(adminController.getUser)
    .patch(updateUserSchema, validateRequestSchema, adminController.updateUser)
    .delete(adminController.deleteUser);  

adminRouter.route('/api/v1/accommodated-user/:id')
    .get(adminController.getAccommodatedUser);

adminRouter.route('/api/v1/student-neighbors/:id')
    .get(adminController.getStudentNeighbors);

module.exports = adminRouter;