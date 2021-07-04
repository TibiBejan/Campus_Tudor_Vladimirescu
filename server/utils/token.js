const jwt = require('jsonwebtoken');

// GENERATE JWT TOKEN
const signToken = (id) => {
    return jwt.sign({ id: id }, process.env.JWT_SECRET_TOKEN, {
        expiresIn: process.env.JWT_EXPIRES_DATE
    });
}

// CREATE TOKEN AND HTTP ONLY COOKIE.
const createToken = (user, statusCode, message, res) => {
    const token = signToken(user.uuid);

    // GENERATE HTTP_ONLY COOCKIE FOR CLIENT SIDE
    res.cookie('jwt', token, {
        expires: new Date(Date.now() + process.env.JWT_EXPIRES_COOKIE_IN * 24 * 60 * 60 * 1000), // MS
        secure: process.env.NODE_ENV === 'production' ? true : false,
        sameSite: 'none',
        httpOnly: true,
    });

    return res.status(statusCode).json({
        status: "success",
        message: message,
        jwtToken: token,
        userData: user
    });
}

module.exports = createToken;