// IMPORT MODULES
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const dotenv = require('dotenv').config();
const { sequelize } = require('./models');
const AppError = require('./utils/appError');
const globalErrorController = require('./controller/errorController');

// IMPORT ROUTES
const authRouter = require('./routes/authRouter');
const adminRouter = require('./routes/adminRouter');
const userRouter = require('./routes/userRouter');
const kinRouter = require('./routes/kinRouter');
const studentMetaRouter = require('./routes/studentMetaRouter');
const hallRouter = require('./routes/hallRouter');

// INIT APP
const app = express();

// GLOBAL MIDDLEWEAR
// HELMET HEADERS SECURITY MIDDLEWEAR
app.use(helmet());
app.use(cors());

// DEV MIDDLEWEAR
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('combined'));
}

// REQUEST LIMITER MIDDLEWEAR
const limiter = rateLimit({
    max: 100, // 100 REQUEST PER 15Min
    windowMs: 15 * 60 * 1000,
    message: 'Too many request from this IP, please try again in 15 minutes!'
});
app.use('/api', limiter); // AFFECT ONLY ROUTES WITH /API

// BODY PARSER FOR req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use('/api/v1/users', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/users', kinRouter);
app.use('/api/v1/users', studentMetaRouter);
app.use('/api/v1/halls', hallRouter);
app.use(adminRouter);


// ERROR MIDDLEWEAR
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(globalErrorController);

// START SERVER AND LISTEN ON PORT 8001 ( DEV ) || 3001 ( PROD )
app.listen({ port: process.env.PORT || 3001 }, async () => {
    console.log(`App running on port 8001...`);
    await sequelize.sync(); //{force: true}
    console.log("Database connected");
});
