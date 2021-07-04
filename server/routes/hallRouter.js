const express = require('express');

// DEFINE ROUTER
const hallRouter = express.Router();
// CONTROLLER
const hallController = require('../controller/hallController');

// ROUTES FOR STUDENT FIRST OF KINS
hallRouter.get('/:name', hallController.getHallById);

module.exports = hallRouter;