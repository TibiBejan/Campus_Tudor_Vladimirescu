const { Sequelize, User, University, Enrollment, StudentMeta, NextOfKin, Hall } = require('../models');
const bcrypt = require('bcrypt');
const AppError = require('../utils/appError');
const createToken = require('../utils/token');

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


// UPDATE CURRENT USER
exports.updateMe = async (req, res, next) => {
    // CREATE ERROR IF USER POST'S PASSWORD DATA
    if(req.body.password) {
        return next(new AppError("You can not use this route to update your password. Use update password route.", 400));
    }

    // FILTER BODY AND UPDATE SPECIFIC FIELDS
    const filteredBody = filterObj(req.body, 'first_name', 'last_name', 'email');

    try {
        const updatedUser = await User.update(filteredBody, {where: { uuid: req.user.uuid }});
        const user = await User.findOne({where: { uuid: req.user.uuid }});

        // JSON RESPONSE WITH UPDATED USER
        return res.status(200).json({
            status: "Success",
            message: "User has been updated!",
            data: {
                user: user
            }
        });
    }
    catch(err) {
        return res.status(500).json({
            status: "Bad Request",
            message: "There is an error updating your info, please try again..."
        });
    }
}

// DELETE CURRENT USER
exports.deleteMe = async (req, res, next) => {
    try {
        const user = await User.findOne({where: { uuid: req.user.uuid}});

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

// UPDATE PASSWORD MIDDLEWARE - NOT WORKING
exports.updateMyPassword = async (req, res, next) => {
    
    try {
        // FIND USER
        const user = await User.findOne({where: { uuid: req.user.uuid }});

        if(!user) {
            return next(new AppError("The user belonging to this token does no longer exists.", 401));
        }

        // CHECK IF POSTED PASSWORD IS CORRECT
        // HASH PASSWORD
        const salt = await bcrypt.genSalt(12);
        const hashedPasswordNew = await bcrypt.hash(req.body.password_new, salt);

        if(!await user.checkPwdValidation(req.body.password_confirm, user.password)) {
            return next(new AppError("Your current password is wrong.", 401));
        }
        // UPDATE PASSWORD
        user.password = hashedPasswordNew;
        user.password_changed_at = new Date(Date.now()).toUTCString();
        await user.save();

        // LOG IN THE USER WITH THE NEW JWT
        createToken(user, 200, "Password updated!", res);
    }
    catch(err) {
        return res.status(500).json({
            status: "Bad request",
            message: "The request can not be resolved, please try again....",
        });
    }
}

// CREATE ENROLLMENT
exports.createEnrollment = async (req, res, next) => {
    try {
        // GET DATA FROM REQ
        let { university, year_of_study, type_of_study, grade, financial_type, nationality, student_gender } = req.body;

        // GET UNIVERSITY BASED ON ENROLLMENT
        const studentUniversity = await University.findOne({ where: { title: university } });

        if(!studentUniversity) {
            return next(new AppError("The enrollment can not be done, please try again", 400));
        }

        // CHECK IF STUDENT IS ALREADY ENROLLED
        const isEnrolled = await Enrollment.findOne({ where: { universityId: studentUniversity.id, userId: req.user.id } });
        
        if(isEnrolled) {
            return next(new AppError("You are already enrolled, please try to update current enrollment.", 406));
        }

        const newEnrollment = await Enrollment.create({
            university: university,
            year_of_study: year_of_study,
            type_of_study: type_of_study,
            grade: grade,
            financial_type: financial_type,
            nationality: nationality,
            student_gender: student_gender,
            userId: req.user.id,
            universityId: studentUniversity.id
        });

        return res.status(200).json({
            status: "Success",
            message: "Enrollment has been created!",
            data: {
                enrollment: newEnrollment
            }
        });
    }
    catch(err) {
        return res.status(500).json({
            status: "Bad request",
            message: "The request can not be resolved, please try again....",
        }); 
    }
}

// UPDATE ENROLLMENT
exports.updateEnrollemnt = async (req, res, next) => {
    try {
        const currentEnrollment = await Enrollment.findOne({ where: { uuid: req.params.id, userId: req.user.id } });

        if(!currentEnrollment) {
            return next(new AppError("Enrollment not found, please enroll", 404));
        }

        // FILTER BODY AND UPDATE SPECIFIC FIELDS
        const filteredBody = filterObj(req.body, 'university', 'year_of_study', 'type_of_study', 'grade', 'financial_type', 'nationality', 'student_gender');
        // UPDATE ENROLLMENT
        const studentUniversity = await University.findOne({ where: { title: req.body.university } });
        if(!studentUniversity) {
            return next(new AppError("The enrollment can not be updated, please try again", 400));
        }
        await currentEnrollment.update({
            ...filteredBody,
            universityId: studentUniversity.id
        });

        // JSON RESPONSE WITH UPDATED USER
        return res.status(200).json({
            status: "Success",
            message: "Enrollment has been updated!",
            data: {
                enrollment: currentEnrollment
            }
        });
    }
    catch(err) {
        return res.status(500).json({
            status: "Bad request",
            message: "The request can not be resolved, please try again....",
        }); 
    }
}

// DELETE ENROLLMENT
exports.deleteEnrollment = async (req, res, next) => {
    try{
        // FIND AND CHECK ENROLLMENT
        const currentEnrollment = await Enrollment.findOne({ where: { uuid: req.params.id, userId: req.user.id } });

        if(!currentEnrollment) {
            return next(new AppError("Enrollment not found, please enroll", 404));
        }

        await currentEnrollment.destroy();

        return res.status(204).json({
            status: "success",
            message: "Enrollment has been deleted!"
        });
    }
    catch(err) {
        return res.status(500).json({
            status: "Bad request",
            message: "The request can not be resolved, please try again....",
        }); 
    }
}


// STUDENT ALLOCATION
exports.studentAllocation = async (req, res, next) => {
    try {
        // CHECK FOR STUDENT META INFORMATIONS
        const studentMetaExists = await StudentMeta.findOne({where: {userId: req.user.id}});

        if(!studentMetaExists) {
            return next(new AppError("In order to be allocated, you must update your student informations.", 404));
        }

        // CHECK FOR STUDENT KINS
        const studentKinsExists = await NextOfKin.findAll({where: {id: req.user.id}});

        if(!studentKinsExists) {
            return next(new AppError("In order to be allocated, you must update your student informations.", 404));
        }

        // IF STUDENT META AND KIN INFORMATION
        const enrollment = await Enrollment.findOne({where: {userId: req.user.id}});

        if(!enrollment) {
            return next(new AppError("In order to be allocated, you must enroll.", 404));
        }

        // GET UNIVERSITY HALLS BASED ON ENROLLMENT UNI ID
        const uniHalls = await University.findOne({
            where: { id: enrollment.universityId },
            attributes:['halls']
        });

        const hallsArr = [...uniHalls.halls];
        
        // FETCH ALL HALLS BASED ON hallsArr
        const halls = await Hall.findAll({
            where: {
                hall_name: hallsArr
            },
            order: [['min_grade', 'desc']],
            attributes: ['id', 'hall_number', 'hall_name', 'rooms_number', 'students_number', 'student_per_room', 'min_grade', 'max_grade']
        });

        // MAP HALLS AND SET CONSTRAINTS
        for (const [i, hall] of halls.entries()) {
            const studentsLimit = hall.students_number;
            // GET USER BASED ON ENROLLMENT
            const enrolledUser = await User.findOne({ where: { id: enrollment.userId } });

            // CHECK IF STUDENT IS ALLREADY ALLOCATED
            if(enrolledUser.hallId !== null) {
                return next(new AppError(`You are already allocated in hall ${hall.hall_name}.`, 500));
            }

            // GET ALL STUDENTS WHERE HALL ID = THIS HALL ID ( COUNT THEM )
            const countStudents = await User.count({
                where: { hallId: hall.id }
            });

            // CHECK IF THE NUMBER OF STUDENTS FROM CURRENT HALL IS GREATER THAN THE LIMIT AND CURRENT HALL IS THE LAST ONE
            if(countStudents >= studentsLimit && i === halls.length - 1) {
                return next(new AppError("You can not enroll because the limit of students for your university has been reached.", 500));
            }

            // CHECK IF THE NUMBER OF STUDENTS FROM CURRENT HALL IS GREATER THAN THE LIMIT
            if(countStudents >= studentsLimit) {
                continue;
            }

            // CHECK IF STUDENT GRADE MATCH HALL CONSTRAINTS
            if(enrollment.grade < hall.min_grade) {
                continue;
            }

            // IF THERE ARE AVAILABLE SPACES AND STUDENT IS NOT ALLOCATED YET, ALLOCATE STUDENT TO CURRENT HALL
            enrolledUser.hallId = hall.id;
            await enrolledUser.save();
            
            // return res.status(200).json({
            //     status: "Success",
            //     message: `Student accomodated in hall ${hall.hall_name}!`,
            //     data: hall
            // });

            // CUSTOM ORDER
            const customOrder = (column, values, direction) => {
                let orderByClause = 'CASE ';
              
                for (let index = 0; index < values.length; index++) {
                  let value = values[index];
              
                  if (typeof value === 'string') value = `'${value}'`;
              
                  orderByClause += `WHEN ${column} = ${value} THEN '${index}' `;
                }
              
                orderByClause += `ELSE ${column} END`
              
                return [Sequelize.literal(orderByClause), direction]
            };

            const allStudents = await User.findAll({
                where: {hallId: hall.id},
                include: [{
                    model: Enrollment,
                }],
                order: [
                    customOrder('type_of_study', ['licenta', 'master','doctorat'], 'ASC'),
                    customOrder('student_gender', ['female', 'male'], 'ASC'),
                    ['Enrollment', 'year_of_study', 'ASC'],
                ]
            });


            const roomMates = [];
            // LOOP OVER STUDENTS FROM CURRENT HALL, INCREMENT = STUDENTS_PER_ROOM
            for(let i = 0; i <= allStudents.length - 1; i++) {
                if(roomMates.length >= hall.student_per_room) {
                    roomMates = [];
                }

                console.log(allStudents[i]);
            }

            return res.status(200).json({
                status: "Success",
                data: allStudents,
            });
        }
    }
    catch(err) {
        return res.status(400).json({
            status: err.name,
            message: `${err.message} at ${err.expiredAt}`
        }); 
    }
}