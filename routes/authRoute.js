import express from 'express';
import {registerController, loginController} from '../controllers/authController.js';

//route object
const route = express.Router()

//routing
//REGISTER || MOTHOD POST

route.post('/register',registerController)

//login || POST
route.post('/login', loginController)

export default route;