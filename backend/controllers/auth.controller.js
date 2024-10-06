import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import signUser from "../utils/tokenWorks.js";

export const signup = async (req, res) =>{
    try{
        const {fullName, username, password, confirmPassword, gender} = req.body;
        
        // Check for password and confirmPassword
        if(password != confirmPassword){
            return res.status(400).json({error: "Password don't match"})
        }

        // Check for existing User
        const user = await User.findOne({username});
        if(user){
            return res.status(400).json({error: "username laready exists"})
        }

        // Password Hashed here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Get Profile Pictures
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        
        // Create New User
        const newUser = new User({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if(newUser){
            signUser(newUser._id, res);

            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
        }else{
            res.status(400).json({error: "Invalid user data"});
        }

    }catch(error){
        console.log("Error in signup controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

export const login = (req, res) =>{
    res.send('login User');
}

export const logout = (req, res) =>{
    res.send('logout User');
}