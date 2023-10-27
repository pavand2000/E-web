
import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async(req, res) => {
    try{
        const {name, email, password, phone, address} = req.body
        //validation
        if(!name){
            return res.send({error:'Name is Required'})
        }
        if(!email){
            return res.send({error:'Email is Required'})
        }
        if(!password){
            return res.send({error:'Password is Required'})
        }
        if(!address){
            return res.send({error:'Address is Required'})
        }
        if(!phone){
            return res.send({error:'Phone no is Required'})
        }

        //existing error
        const existingUser = await userModel.findOne({email})
        //existing user
        if(existingUser){
            return res.status(200).send({
                success:false,
                message:'already Register please Login',
            })
        }

        //register user
        const hashedPassword = await hashPassword(password)
        //save
        const user = await new userModel({name, email, phone, address, password:hashedPassword}).save()

        res.status(201).send({
            success:true,
            message:'user register succesfully',
            user
        })

    } catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:'error in registration',
            error
        })
    }
};

//POST LOGIN

export const loginController = async (req, res) => {
    try{
        const {email,password} = req.body
        //validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'Invalide email or password'
            })
        }
        //check user
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Email is not register',
                error
            })
        }
        const match = await comparePassword (password,user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:'invalied password'
            })
        }
        //token
        const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});
        res.status(200).send({
            success:true,
            message:"login succesfully",
            user:{
                name: 'user.name',
                email:'user.email',
                phone:'user.phone',
                address:'user.address'
            },
            token,
        });
    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in login',
            error
        })
    }
};