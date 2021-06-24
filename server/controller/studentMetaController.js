const { StudentMeta } = require('../models');
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

// GET STUDENT META
exports.getStudentMeta = async (req, res, next) => {
    try {
        const studentMeta = await StudentMeta.findOne({ where: { userId: req.user.id } }); 

        if(!studentMeta) {
            return next(new AppError("There is no meta information related to this user.", 400));
        }

        return res.status(200).json({
            status: "success",
            data: {
                studentMeta: studentMeta
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

// CREATE STUDENT META
exports.createStudentMeta = async (req, res, next) => {
    const { username, dob, sex, nationality, phone_number, adress, city, state_province, country, zip_code } = req.body;

    try {
        let studentMeta = await StudentMeta.findOne({where: { userId: req.user.id }});

        if(studentMeta) {
            return next(new AppError("You already defined your meta information, plase use update route to modify", 400));
        }

        studentMeta = await StudentMeta.create({
            username: username,
            dob: dob,
            sex: sex,
            nationality: nationality,
            phone_number: phone_number,
            adress: adress,
            city: city,
            state_province: state_province,
            country: country,
            zip_code: zip_code,
            userId: req.user.id
        });

        return res.status(201).json({
            status: "success",
            message: "Student meta information created!",
            data: {
                studentMeta: studentMeta
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

// UPDATE STUDENT META
exports.updateStudentMeta = async (req, res, next) => {
    try{
        // FILTER BODY AND UPDATE SPECIFIC FIELDS
       const filteredBody = filterObj(req.body, 'username', 'dob', 'sex', 'nationality', 'phone_number', 'adress', 'city', 'state_province', 'country', 'zip_code');
       // FIND THE USER AND UPDATE INFO

        const currentStudentMeta = await StudentMeta.findOne({ where: { uuid: req.params.id } });

        if(!currentStudentMeta) {
            return next(new AppError("This meta information can not be updated, please try again.", 400));
        }

       const updateMeta = await StudentMeta.update(filteredBody, { where: { uuid: req.params.id } });

       const updatedStudentMeta = await StudentMeta.findOne({ where: { uuid: req.params.id } })

       // JSON RESPONSE WITH UPDATED KIN
       return res.status(200).json({
           status: "Success",
           message: "Student meta information has been updated!",
           data: {
               studentMeta: updatedStudentMeta
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

// DELETE STUDENT META
exports.deleteStudentMeta = async (req, res, next) => {
    try {
        const currentStudentMeta = await StudentMeta.findOne({ where: { uuid: req.params.id } });

        if(!currentStudentMeta) {
            return next(new AppError("This meta information can not be deleted, please try again.", 400));
        }

        await currentStudentMeta.destroy();

        return res.status(204).json({
            status: "success",
            message: "Student meta information has been deleted!"
        });
    }
    catch(err) {
        return res.status(500).json({
            status: "Bad Request",
            message: "There is an error deleting your meta information, please try again..."
        });
    }
}