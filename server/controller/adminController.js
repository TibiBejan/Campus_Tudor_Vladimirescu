const { User, Enrollment, Hall, HallRoom } = require('../models');
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
        const users = await User.findAll({
            where: {
                role: 'student',
            },
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
            message: 'Users Fetched',
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
            const users = await User.findAll({
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
            const users = await User.findAll({
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
            const users = await User.findAll({
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
            user: user
        });
    }
    catch(err) {
        return res.status(500).json({
            status: "Error",
            message: "Internal Server Error - Please try again..."
        });
    }
}

exports.getAccommodatedUser = async (req, res, next) => {
    const targetId = req.params.id;

    try {
        const user = await User.findOne({
            where: { uuid: targetId},
            include: [{
                model: Enrollment,
            },
            {
                model: Hall,
                attributes: ['students_number', 'rooms_number', 'student_per_room', 'min_grade']
            },
            {
                model: HallRoom,
            }],
        });

        if(!user) {
            return next(new AppError("404 User not found!", 404));
        }

         return res.status(200).json({
            status: "success",
            user: user
        });
    }
    catch(err) {
        return res.status(500).json({
            status: "Error",
            message: "Internal Server Error - Please try again..."
        });
    }
}

exports.getStudentNeighbors = async (req, res, next) => {
    const targetId = req.params.id;

    if(!targetId) {
        return next(new AppError("At this moment, this student has no neighbors", 500));
    }

    try {
        const currentUser = await User.findOne({
            where: { uuid: targetId },
            include: [
                {
                    model: HallRoom,
                    attributes: ['room_number', 'room_floor', 'room_rent', 'room_beds']
                },
            ]
        });

        if(!currentUser) {
            return next(new AppError("404 User not found, please refresh the page!", 404));
        }

        const neighbors = await HallRoom.findAll({
            where: {
                hallId: currentUser.hallId,
                room_number: currentUser.HallRoom.room_number
            },
            attributes: ['userId'],
        });

        const neighborsArr = neighbors.map((neighbor) => (neighbor.userId));


        const fetchedNeighbors = await User.findAll({ 
            where: { id: neighborsArr },
            attributes: ['uuid', 'first_name', 'last_name', 'email'],
            include: [{
                model: Enrollment,
                attributes: ['university', 'year_of_study', 'type_of_study', 'grade', 'financial_type', 'nationality', 'student_gender'],
            }]
        });

        if(!fetchedNeighbors) {
            return next(new AppError("At this moment, this student has no neighbors", 500));
        }

        return res.status(200).json({
            status: "Success",
            message: "Neighbors fetched!",
            fetchedNeighbors
        });
    }
    catch(err) {
        return res.status(500).json({
            status: "Error",
            message: "At this moment, this student has no neighbors."
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