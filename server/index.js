// IMPORT MODULES
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const dotenv = require('dotenv').config();
const { sequelize } = require('./models');
const AppError = require('./utils/appError');
const globalErrorController = require('./controller/errorController');
const compression = require('compression');

// IMPORT ROUTES
const authRouter = require('./routes/authRouter');
const adminRouter = require('./routes/adminRouter');
const userRouter = require('./routes/userRouter');
const kinRouter = require('./routes/kinRouter');
const studentMetaRouter = require('./routes/studentMetaRouter');
const hallRouter = require('./routes/hallRouter');
const accommodationRouter = require('./routes/accommodationRouter');

// INIT APP
const app = express();

// GLOBAL MIDDLEWEAR
// HELMET HEADERS SECURITY MIDDLEWEAR
app.use(helmet());
app.use(cors({
    origin: '*',
    credentials: true,
}));


// {
//     "Access-Control-Allow-Credentials": true,
//     "Access-Control-Allow-Origin": '*',
//     // origin: ['http://localhost:3000', 'https://campus-tudor-vladimirescu.netlify.app'],
//     credentials: true,
//     optionSuccessStatus:200
// }

app.use(cookieParser());
app.use(compression());

// BODY PARSER FOR req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DEV MIDDLEWEAR
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('combined'));
}

// // REACT STATIC FILES
// app.use(express.static(path.join(__dirname, 'client/build')));

// REQUEST LIMITER MIDDLEWEAR
const limiter = rateLimit({
    max: 250,
    windowMs: 15 * 60 * 1000,
    message: 'Too many request from this IP, please try again in 15 minutes!'
});
app.use('/api', limiter); // AFFECT ONLY ROUTES WITH /API

// ROUTES
app.use('/api/v1/users', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/users', kinRouter);
app.use('/api/v1/users', studentMetaRouter);
app.use('/api/v1/halls', hallRouter);
app.use('/api/v1/', accommodationRouter);
app.use(adminRouter);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });


// ERROR MIDDLEWEAR
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(globalErrorController);

// START SERVER AND LISTEN ON PORT 8001 ( DEV ) || 3001 ( PROD )
const port = process.env.PORT || 3001
app.listen(port, async () => {
    console.log(`App running on port 8001...`);
    await sequelize.sync(); //{force: true}
    console.log("Database connected");
});