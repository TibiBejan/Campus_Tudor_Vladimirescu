const express = require('express');
const { validateRequestSchema } = require('../middleware/validateRequestSchema');
const { createKinSchema, updateKinSchema } = require('../schema/nextOfKinSchema');

// DEFINE ROUTER
const kinRouter = express.Router();
// CONTROLLER
const kinController = require('../controller/kinController');
const authController = require('../controller/authController');
// APPLY MIDDLEWARE'S
kinRouter.use(authController.protect);

// ROUTES FOR STUDENT FIRST OF KINS
kinRouter.get('/kins', kinController.getAllKins);
kinRouter.get('/kins/:id', kinController.getKinById);
kinRouter.post('/kins', createKinSchema, validateRequestSchema, kinController.createKin );
kinRouter.patch('/kins/:id', updateKinSchema, validateRequestSchema, kinController.updateKin);
kinRouter.delete('/kins/:id', kinController.deleteKin);

module.exports = kinRouter;