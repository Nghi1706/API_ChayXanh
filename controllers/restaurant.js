import { Restaurants_CX } from "../models/createTable.js";

// export const getSchedules = async (req, res) => {
//     try {
//         const schedule = await ScheduleModel.find();
//         res.status(200).json(schedule);
//     } catch (err) {
//         res.status(500).json({ error: err });
//     }
// }

export const getRestaurant = async (req, res) => {
    try {
        const listRestaurant = await Restaurants_CX.find();
        res.status(200).json(listRestaurant);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}
export const createRestaurant = async (req, res) => {
    try {
        const newRestaurant = req.body;
        const restaurant = new Restaurants_CX(newRestaurant);
        await restaurant.save()
        res.status(200).json({ "message": "Thêm mới thành công!" });
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}
// export const updateSchedules = async (req, res) => {
//     try {
//         const updateSchedules = req.body;
//         const schedule = await ScheduleModel.findOneAndUpdate({ _id: updateSchedules._id }, updateSchedules, { new: true })
//         res.status(200).json(schedule);
//     }
//     catch (err) {
//         res.status(500).json({ error: err });
//     }
// }
