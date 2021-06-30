const { User, Enrollment, Hall, HallRoom } = require('../models');
const AppError = require('../utils/appError');

// GET ACCOMMODATED STUDENT
exports.getAccommodatedUser = async (req, res, next) => {
    try {
        const currentStudent = await User.findOne({ 
            where: { uuid: req.user.uuid },
            include: [
                {
                    model: HallRoom,
                    where: { userId: req.user.id },
                },
                {
                    model: Hall,
                    where: { id: req.user.hallId }
                }
            ]
        });

        if(!currentStudent) {
            return next(new AppError("You are not accommodated, please enroll", 404));
        }

        const currentStudentNeighbors = await HallRoom.findAll({
            where: {
                hallId: currentStudent.hallId,
                room_number: currentStudent.HallRoom.room_number
            },
            attributes: ['userId'],
        });

        const neighborsArr = currentStudentNeighbors.map((neighbor) => (neighbor.userId));

        const fetchedNeighbors = await User.findAll({ 
            where: { id: neighborsArr },
            include: [{
                model: Enrollment,
            }]
        });

        const accommodatedUser = {
            student: currentStudent,
            neighbors: fetchedNeighbors
        }

        return res.status(200).json({
            status: "Success",
            message: "Accommodated student fetched!",
            accommodatedUser
        });
    }
    catch(err) {
        return res.status(500).json({
            status: "Bad request",
            message: "The request can not be resolved, please try again....",
        }); 
    }
}