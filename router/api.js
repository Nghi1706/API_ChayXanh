import express from "express";
import { createUser, getUser, findUser, getListUserForRestaurant } from "../controllers/user.js";
import { getRestaurant, createRestaurant } from "../controllers/restaurant.js";
const router = express.Router();

router.get('/api/Cost');
router.get('/api/getUser', getUser);
router.get('/api/findUser', findUser); getListUserForRestaurant
router.get('/api/getListUserForRestaurant', getListUserForRestaurant);
router.post('/api/createUser', createUser);
router.get('/api/getRestaurant', getRestaurant);
router.post('/api/createRestaurant', createRestaurant);
export default router;