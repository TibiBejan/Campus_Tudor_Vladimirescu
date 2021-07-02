const { User, Enrollment } = require('../models');
const { Op } = require("sequelize");
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
        const users = await User.findAndCountAll({
            include: [{
                model: Enrollment
            }],
            order: [
                [{model: 'Enrollment'}, 'grade', 'ASC'],
                [{model: 'Enrollment'}, 'year_of_study', 'ASC'],
            ]
        });

        if(!users) {
            return next(new AppError("There are no users in the database, please try again...", 500));
        }

        return res.status(200).json({
            status: "success",
            students: users
        });
    }
    catch(err) {
        return res.status(500).json({
            status: "Error",
            message: "Internal Server Error - Please try again..."
        });
    }
}

exports.getUsersByQuerry = async (req, res, next) => {

    const queryObj = {...req.query};
    const excludedFields = ['page', 'limit', 'sort', 'fields'].forEach(field => delete queryObj[field]);

    if(Object.keys(queryObj).length === 0) {
        return next(new AppError("Please type a querry or select something from the inputs below.", 500));
    }

    if(queryObj.searchQuerry) {
        const validatedQuerrySearch = queryObj.searchQuerry.match(/^[ A-Za-z0-9_@./-]*$/g);

        if(validatedQuerrySearch === null) {
            return next(new AppError("Your querry must contain only alphanumeric chars and the following: _@./-", 500));
        }
    }

    try {
        if(queryObj.searchQuerry && (queryObj.university === null || !queryObj.university)) {
            const users = await User.findAndCountAll({
                where: {
                    role: 'student',
                    [Op.or]: [
                        {
                            email: queryObj.searchQuerry,
                        },
                        {
                           first_name: { [Op.like]: `%${queryObj.searchQuerry}%` }
                        },
                        {
                            last_name: { [Op.like]: `%${queryObj.searchQuerry}%` }
                        }
                    ],
                }
            });

            if(users.length === 0) {
                return next(new AppError("There are no users that match your search querry", 400));
            }
            
            if(!users) {
                return next(new AppError("There are no users in the database, please try again...", 400));
            }
    
             return res.status(200).json({
                status: "success",
                results: users.length,
                students: users
            });
        } else if (queryObj.university && (queryObj.searchQuerry === null || !queryObj.searchQuerry)) {
            const users = await User.findAndCountAll({
                where: { role: 'student' },
                include: [{
                    model: Enrollment,
                    where: { 
                        university: queryObj.university 
                    },
                    attributes: ['uuid']
                }],
                
            });

            if(users.length === 0) {
                return next(new AppError("There are no users that match your search querry", 400));
            }
            
            if(!users) {
                return next(new AppError("There are no users in the database, please try again...", 400));
            }
    
             return res.status(200).json({
                status: "success",
                results: users.length,
                students: users
            });
        } else if (queryObj.searchQuerry && queryObj.university) {
            const users = await User.findAndCountAll({
                where: {
                    [Op.or]: [
                        {
                            email: queryObj.searchQuerry,
                        },
                        {
                           first_name: { [Op.like]: `%${queryObj.searchQuerry}%` }
                        },
                        {
                            last_name: { [Op.like]: `%${queryObj.searchQuerry}%` }
                        }
                    ],
                },
                include: [{
                    model: Enrollment,
                    where: { university: queryObj.university },
                    attributes: ['uuid']
                }]
            });

            if(users.length === 0) {
                return next(new AppError("There are no users that match your search querry", 400));
            }
            
            if(!users) {
                return next(new AppError("There are no users in the database, please try again...", 400));
            }
    
             return res.status(200).json({
                status: "success",
                results: users.length,
                students: users
            });
        }
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