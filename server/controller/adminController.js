const { User } = require('../models');
const bcrypt = require('bcrypt');
const AppError = require('../utils/appError');

// UTILITY FUNCTIONS
const filterObj = (obj, ...allowedFields) => {
    const filteredObj = {}
    Object.keys(obj).forEach(element => {
        if(allowedFields.includes(element)) {
            filteredObj[element] = obj[element];
        }
    });
    return filteredObj;
}

exports.getAllUsers = async (req, res, next) => {

    try {
        const users = await User.findAll(); 

        if(!users) {
            return next(new AppError("There are no users in the database, please try again...", 400));
        }

         return res.status(200).json({
            status: "success",
            results: users.length,
            data: {
                users: users
            }
        });
    }
    catch(err) {
        return res.status(500).json({
            status: "Error",
            message: "Internal Server Error - Please try again..."
        });
    }
}

exports.getUser = async (req, res, next) => {

    const targetId = req.params.id;

    try {
        const user = await User.findOne({where: { uuid: targetId}});

        if(!user) {
            return next(new AppError("404 User not found!", 404));
        }

         return res.status(200).json({
            status: "success",
            data: {
                user: user
            }
        });
    }
    catch(err) {
        return res.status(500).json({
            status: "Error",
            message: "Internal Server Error - Please try again..."
        });
    }
}

exports.createUser = async (req, res, next) => {

    const { firstName, lastName, email, password,  role } = req.body;

    try {
        // HASH PASSWORD
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: hashedPassword,
            role: role
        });

        return res.status(201).json({
            status: "success",
            message: "User created!",
            data: {
                userData: newUser
            }
        });
    }

    catch(err) {
        return res.status(500).json({
            status: "Error",
            message: "Internal Server Error - Please try again..."
        })
    }
}

exports.updateUser = async (req, res, next) => {

    const targetId = req.params.id;

    try {
        const user = await User.findOne({where: {uuid: targetId}});

        if(!user) {
            return next(new AppError("User not found.", 404));
        }

        // FILTER BODY AND UPDATE SPECIFIC FIELDS
        const filteredBody = filterObj(req.body, 'first_name', 'last_name', 'email', 'role');
        const updatedUser = await user.update(filteredBody);

        return res.status(200).json({
            status: "success",
            message: "User has been updated!"
        });
    }

    catch(err) {
        res.status(500).json({
            status: "Error",
            message: "Internal Server Error - Please try again..."
        })
    }
}

exports.deleteUser = async (req, res, next) => {

    const targetId = req.params.id;

    try {
        const user = await User.findOne({where: { uuid: targetId}});

        if(!user) {
            return next(new AppError("User not found", 404));
        }

        await user.destroy();

        return res.status(204).json({
            status: "success",
            message: "User has been deleted!"
        });
    }
    catch(err) {
        return res.status(500).json({
            status: "Error",
            message: "Internal Server Error - Please try again..."
        });
    }
}