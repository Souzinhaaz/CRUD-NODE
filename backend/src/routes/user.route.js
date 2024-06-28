const route = require("express").Router();
const userController = require("../controllers/user.controller")

// Create
route.post("/", userController.create);

// Read
route.get("/", userController.findAllSorted);
route.get("/:id", userController.findById);

// Update
route.post("/:id", userController.updateOne);

// Delete
route.delete("/:id", userController.deleteOne);

module.exports = route;