require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MONGODB");
  } catch (error) {
    console.error("Error connecting", error.message);
  }
};

module.exports = connectDB;
