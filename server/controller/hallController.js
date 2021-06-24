const { Hall, HallStaff } = require('../models');
const AppError = require('../utils/appError');

// GET HALL BY NAME
exports.getHallById = async (req, res, next) => {
    try {
        const hall = await Hall.findOne({ 
            where: { hall_name: req.params.name },
            include: [HallStaff]
        });

        if(!hall) {
            return next(new AppError("404 Hall not found!", 404));
        }

        return res.status(200).json({
            status: "success",
            hall
        });
    }
    catch(err) {
        return res.status(500).json({
            status: "Error",
            message: "Internal Server Error - Please try again..."
        });
    }
}