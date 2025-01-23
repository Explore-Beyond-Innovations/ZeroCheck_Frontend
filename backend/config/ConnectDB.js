

const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async(req,res) => {
    try{

        await mongoose.connect(process.env.MONODB_URI);
        console.log("DataBae Connection Successfully");

    }catch(error){
        console.log(error);
        console.log("Error In DataBase Connection");
    }
}

module.exports = connectDB;

