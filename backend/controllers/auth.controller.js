import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import jwt from 'jsonwebtoken'

export const signup = async (req, res)=>{
    try {
        const {fullName, email, phoneNumber, gender, dob, username, password, confirmPassword} = req.body;
		// const {fullName, gender, username, password, confirmPassword} = req.body;
        if(password != confirmPassword) {
            return res.status(400).json({error:"Passwords doesn't match"});
        }
        const user = await User.findOne({ username })
        if(user){
			// console.log("This is a problem");
            return res.status(400).json({error: "User already Exists"})
        }

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		if(!hashedPassword){
			return res.status(400).json({error: "Somthing is Wrong!"})
		}

		const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

		const newUser = new User({
			fullName,
			email,
			phoneNumber,
			gender,
			dob,
			username,
			password: hashedPassword,
			profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
		});
		if (newUser) {
			// Generate JWT token here
			generateTokenAndSetCookie(newUser._id, res);
			await newUser.save();

			res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullName,
				username: newUser.username,
				profilePic: newUser.profilePic,
			});
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}       
    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({error: "Internal Server Error"})
    }
}

// Login
export const login = async (req, res)=>{
    try {
        const {username, password} = req.body;
        const user = await User.findOne({ username }); // Await the findOne call

        // If user does not exist or password is incorrect
        if (!user) {
            return res.status(400).json({ error: "Invalid Credentials" });
        }

        // Compare the provided password with the hashed password in the database
        const isCorrectPassword = await bcrypt.compare(password, user.password); // Await the compare call

        if (!isCorrectPassword) {
            return res.status(400).json({ error: "Invalid Credentials" });
        }
        
		generateTokenAndSetCookie(user._id, res);

		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			username: user.username,
			profilePic: user.profilePic,
		});
    } catch (error) {
        console.log("Login Error", error.message);
        res.status(500).json({error : "Internal Server error"})
    }
}


// Logout
export const logout = async (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
}