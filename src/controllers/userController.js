const User = require("../models/userModel");

exports.createNewUser = (req, res) => {
  //create new user
  User.create(
    {
      ...req.body,
    },
    (err, newUser) => {
      if (err) {
        return res.status(500).json({ message: err });
      } else {
        //send an object of user to client and a status code
        return res
          .status(200)
          .json({ message: "New user created successfully.", newUser });
      }
    }
  );
};

// Get all users
exports.getAllUsers = (req, res) => {
  // Get all users from db
  try {
    User.find({}, (err, users) => {
      if (err) {
        return res.status(500).json({ message: err });
      } else {
        return res.status(200).json(users);
      }
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

// Get a user by ID
exports.getOneUser = (req, res) => {
  try {
    User.findById(req.params.id, (err, user) => {
      if (err) {
        return res.status(500).json({ message: err });
      } else if (!user) {
        return res
          .status(404)
          .json({ message: `No user found for userID: ${req.params.id}` });
      } else {
        return res.status(200).json(user);
      }
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

// Update user
exports.updateOneUser = (req, res) => {
  try {
    const { id } = req.params;
    const { data } = req.body;

    var filter = { _id: id };

    var userData = {
      $set: data,
    };

    User.updateOne(filter, userData, (err, user) => {
      if (err) {
        return res.status(500).json({ message: err });
      } else if (!user) {
        return res
          .status(404)
          .json({ message: `User found for the userID: ${id}` });
      } else {
        return res.status(200).json({ message: "User updated successfully" });
      }
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

// Delete user
exports.deleteOneUser = (req, res) => {
    User.findByIdAndDelete(req.params.id, (err, user) => {
      if (err) {
        return res.status(500).json({ message: err });
      } else if (!user) {
        return res
          .status(404)
          .json({ message: `User with id: ${req.param.id} not found` });
      } else {
        res.status(200).json({ message: "User deleted successfully" });
      }
    });
  };