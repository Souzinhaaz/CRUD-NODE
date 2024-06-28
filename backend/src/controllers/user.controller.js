const userService = require("../services/user.service");
const mongoose = require("mongoose");

module.exports = {
  create: async (req, res) => {
    const { name, email, telephone, birthDate } = req.body;

    if (!name || !email || !telephone || !birthDate) {
      return res
        .status(400)
        .send({ message: "All the fields have to be filled!" });
    }

    const user = await userService.createService(req.body);

    if (!user) {
      return res.status(400).send({ message: "Error creating User" });
    }

    res.status(201).send({
      message: "User created sucessfully",
      user: {
        id: user._id,
        name,
        email,
        telephone,
        birthDate,
      },
    });
  },

  findAllSorted: async (req, res) => {
    const users = await userService.findAllService();

    if (users.length === 0) {
      return res
        .status(404)
        .send({ message: "There are not registered users!" });
    }

    res.status(200).send(users);
  },

  findById: async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid ID" });
    }

    const user = await userService.findByIdService(id);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    res.send(user);
  },

  deleteOne: async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid ID" });
    }

    const user = await userService.findOneAndDeleteService(id);

    if (!user) {
      return res.status(404).send({message: "User not found"})
    }

    res.send({message: `O usuário ${user.name} foi removido com sucesso`});
  },

  updateOne: async (req, res) => {
    const { name, email, telephone, birthDate } = req.body;
    const id = req.params.id;

    if (!name || !email || !telephone || !birthDate) {
      return res
        .status(400)
        .send({ message: "All the fields have to be filled!" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid ID" });
    }

    const user = await userService.findOneAndUpdate(id, req.body);

    if (!user) {
      return res.status(404).send({message: "User not found"})
    }

    res.send(user)
  }
};
