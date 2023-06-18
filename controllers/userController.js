const express = require('express');
const user = require('../models/user');
const User = require('../models/user');

const router = express.Router();

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
    User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};

// Create a new user
exports.create = async (req, res) => {
  // Validate request
  if (!req.body.email || !req.body.username || !req.body.password) {
    return res.status(400).send({
      message: "Required field can not be empty",
    });
  }

  // Create a new user
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password, // remember to hash the password before saving in real-world scenarios
    roles: req.body.roles,
    lvl: req.body.lvl,
    exp: req.body.exp,
    profilePicture_url: req.body.profilePicture_url,
    gender: req.body.gender,
    description: req.body.description,
    skills: req.body.skills
  });

  // Save user in the database
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};
