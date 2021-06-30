const express = require('express');

// DEFINE ROUTER
const accommodationRouter = express.Router();
// CONTROLLERS
const accommodationController = require('../controller/accommodationController');
const authController = require('../controller/authController');
// APPLY MIDDLEWARE'S
accommodationRouter.use(authController.protect);

// ROUTES FOR AUTHENTICATED USERS
accommodationRouter.get('/accommodation/:id', accommodationController.getAccommodatedUser);

module.exports = accommodationRouter;
