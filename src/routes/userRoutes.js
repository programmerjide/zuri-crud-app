const express = require("express");
const router = express.Router();
const UserController = require('../controllers/userController');

// POST request to /users to create a new user
router.post("/users", UserController.createNewUser);

// GET request to /users to fetch all users
router.get("/users", UserController.getAllUsers);

// Using findbyid() to find a user
router.get("/user/:id", UserController.getOneUser);

// PUT request to /users/:id to update one user
router.put("/user/:id", UserController.updateOneUser);

// DELETE request to /users/:id to delete a user
router.delete("/user/:id", UserController.deleteOneUser);

module.exports = router;
