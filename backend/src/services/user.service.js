const User = require("../models/User");

module.exports = {
  createService: (body) => User.create(body),

  findAllService: () => User.find().sort({name: "asc"}),

  findByIdService: (id) => User.findById(id),

  findOneAndDeleteService: (id) => User.findOneAndDelete({_id: id}),

  findOneAndUpdate: (id, body) => User.findOneAndUpdate({_id: id}, body)
};
