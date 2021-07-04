const express = require('express');
const { validateRequestSchema } = require('../middleware/validateRequestSchema');
const { createStudentMetaSchema, updateStudentMetaSchema } = require('../schema/studentMetaSchema');

// DEFINE ROUTER
const studentMetaRouter = express.Router();
// CONTROLLER
const studentMetaController = require('../controller/studentMetaController');
const authController = require('../controller/authController');
// APPLY MIDDLEWARE'S
studentMetaRouter.use(authController.protect);

// ROUTES FOR STUDENT META
studentMetaRouter.get('/student-meta', studentMetaController.getStudentMeta);
studentMetaRouter.post('/student-meta', createStudentMetaSchema, validateRequestSchema, studentMetaController.createStudentMeta);
studentMetaRouter.patch('/student-meta/:id', updateStudentMetaSchema, validateRequestSchema, studentMetaController.updateStudentMeta);
studentMetaRouter.delete('/student-meta/:id', studentMetaController.deleteStudentMeta);

module.exports = studentMetaRouter;