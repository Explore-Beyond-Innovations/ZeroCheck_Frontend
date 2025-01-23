const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    avatar: {
        required: true,
        type: String
    },
    username: {
        required: true,
        type: String,
        unique: true  
    },
    address: {
        required: true,
        type: String
    },
    World_ID_badge_details: {
        required: true,
        type: String
    }
});


module.exports = mongoose.model("User", UserSchema);
