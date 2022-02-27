import { Users_CX } from "../models/createTable.js";

export const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        const user = new Users_CX(newUser);
        await user.save()
        res.status(200).json({ "message": "Thêm mới thành công!" });
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
}
export const getUser = async (req, res) => {
    try {
        const listUser = await Users_CX.find();
        res.status(200).json(listUser);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}
//find user by _id
export const findUser = async (req, res) => {
    try {
        const user = req.body;
        const _id = user._id;
        const listUser = await Users_CX.findById(_id);
        res.status(200).json(listUser);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}
export const getListUserForRestaurant = async (req, res) => {
    try {
        const restaurant = req.body;
        const restaurant_id = restaurant.restaurant_id;
        const listUser = await Users_CX.find({ "restaurant_id": restaurant_id });
        var users = [];
        for (let i = 0; i < listUser.length; i++) {
            users.push({
                "user_id": listUser[i]._id,
                "name": listUser[i].name,
            })
        }
        if (users.length == 0) {
            res.status(403).json();
        }
        else {
            res.status(200).json(users);
        }
    } catch (err) {
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
