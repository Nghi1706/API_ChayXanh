import express from "express";
import { createUser, getUser, findUser, getListUserForRestaurant, getManager, getEmployee } from "../controllers/user.js";
import { findRestaurant, createRestaurant, getListRestaurant } from "../controllers/restaurant.js";
const router = express.Router();

router.get('/api/Cost');
router.get('/api/getUser', getUser);
router.get('/api/findUser', findUser);
router.get('/api/getManager', getManager);
router.get('/api/getEmployee', getEmployee);
router.get('/api/getListUserForRestaurant', getListUserForRestaurant);
router.post('/api/createUser', createUser);
router.get('/api/findRestaurant', findRestaurant);
router.get('/api/getListRestaurant', getListRestaurant);
router.post('/api/createRestaurant', createRestaurant);
export default router;