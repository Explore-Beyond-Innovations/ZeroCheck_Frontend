const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

app.use(cors());
app.use(express.json());


const connectDB = require("./config/ConnectDB")

const userRoutes = require("./Routes/UserRoute");

app.use("/user",userRoutes );





app.listen(process.env.PORT, ()=>{
    console.log(`Server Connected At PORT ${process.env.PORT}`);
    connectDB();
})
