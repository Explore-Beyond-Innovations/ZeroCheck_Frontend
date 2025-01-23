const express = require("express");
const User = require("../Schmea/UserSchema");
const routes = express.Router();




const updateUserDetails = async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedData = req.body;

        const userExists = await User.findById(userId);
        if (!userExists) {
            return res.status(404).json({ message: "User not Login" });
        }

        const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true });

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(updatedUser); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

routes.put("/updateUser/:id", updateUserDetails);


module.exports = routes;
