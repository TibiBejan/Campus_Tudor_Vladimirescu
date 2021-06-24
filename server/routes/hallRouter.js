const express = require('express');

// DEFINE ROUTER
const hallRouter = express.Router();
// CONTROLLER
const hallController = require('../controller/hallController');
// const authController = require('../controller/authController');
// // APPLY MIDDLEWARE'S
// kinRouter.use(authController.protect);

// ROUTES FOR STUDENT FIRST OF KINS
hallRouter.get('/:name', hallController.getHallById);

module.exports = hallRouter;