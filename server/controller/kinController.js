const { NextOfKin } = require('../models');
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

// GET ALL KINS
exports.getAllKins = async (req, res, next) => {
    try {
        const nextOfKin = await NextOfKin.findAll({ where: { userId: req.user.id } }); 

        if(!nextOfKin || nextOfKin.length === 0) {
            return next(new AppError("There are no kins related to this user.", 400));
        }

         return res.status(200).json({
            status: "success",
            results: nextOfKin.length,
            data: {
                users: nextOfKin
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

// GET KIN BY ID
exports.getKinById = async (req, res, next) => {
    try {
        const kin = await NextOfKin.findOne({ where: { userId: req.user.id,  uuid: req.params.id}});

        if(!kin) {
            return next(new AppError("404 Kin not found!", 404));
        }

        return res.status(200).json({
            status: "success",
            data: {
                user: kin
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

// CREATE KIN
exports.createKin = async (req, res, next) => {

    const { first_name, last_name, email, relation, adress, phone_number } = req.body;

    try {
        const definedRelation = await NextOfKin.findOne({ where: { userId: req.user.id, relation: relation } });

        if(definedRelation) {
            return next(new AppError("This kin relation is already defined, please add a new one.", 500));
        }

        const newKin = await NextOfKin.create({
            first_name: first_name,
            last_name: last_name,
            email: email,
            relation: relation,
            adress: adress,
            phone_number: phone_number,
            userId: req.user.id
        });

        return res.status(201).json({
            status: "success",
            message: "Kin created!",
            data: {
                userData: newKin
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

// UPDATE KIN
exports.updateKin = async (req, res, next) => {
    try{
         // FILTER BODY AND UPDATE SPECIFIC FIELDS
        const filteredBody = filterObj(req.body, 'first_name', 'last_name', 'email', 'relation', 'adress', 'phone_number');
        // FIND THE USER AND UPDATE INFO
        const currentKin = await NextOfKin.update(filteredBody, { where: { uuid: req.params.id } });
        const updatedKin = await NextOfKin.findOne({ where: { uuid: req.params.id } })

        // JSON RESPONSE WITH UPDATED KIN
        return res.status(200).json({
            status: "Success",
            message: "Kin has been updated!",
            data: {
                kin: updatedKin
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

// DELETE KIN
exports.deleteKin = async (req, res, next) => {
    try {
        const kin = await NextOfKin.findOne({where: { uuid: req.params.id}});

        if(!kin) {
            return next(new AppError("Kin not found", 404));
        }

        await kin.destroy();

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