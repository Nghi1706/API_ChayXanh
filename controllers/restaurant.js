import { Restaurants_CX } from "../models/createTable.js";

// export const getSchedules = async (req, res) => {
//     try {
//         const schedule = await ScheduleModel.find();
//         res.status(200).json(schedule);
//     } catch (err) {
//         res.status(500).json({ error: err });
//     }
// }

export const findRestaurant = async (req, res) => {
    try {
        const restaurant = req.body;
        const infoRestaurant = await Restaurants_CX.findById(restaurant._id);
        res.status(200).json(infoRestaurant);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

export const getListRestaurant = async (req, res) => {
    try {
        const listRestaurant = await Restaurants_CX.find();
        var restaurants = [];
        for (let i = 0; i < listRestaurant.length; i++) {
            restaurants.push({
                "restaurant_id": listRestaurant[i]._id,
                "name": listRestaurant[i].name,
            })
        }
        if (restaurants.length == 0) {
            res.status(403).json();
        }
        else {
            res.status(200).json(restaurants);
        }
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
