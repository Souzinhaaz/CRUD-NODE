const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB connected successfuly")
  } catch (error) {
    console.log("Ocurred a error trying to connect: ", + error)
  }
};

module.exports = connectDatabase;
