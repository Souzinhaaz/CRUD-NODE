const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
    trim: true,
  }
})

const User = mongoose.model("User", UserSchema)

module.exports = User;