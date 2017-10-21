const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = mongoose.model('User');

function registerUser(req, res) {
  const { email, username, password, passwordConfirmation } = req.body;
  
  // If all fields exist 
  if (email && username && password && passwordConfirmation) {
    // Create user
    const user = new User({ 
      email, 
      username, 
      password, 
      passwordConfirmation 
    });

    user.save(err => {
      if (err) {
        res.status(400).send({
          message: err
        });
      }
      
      res.json({ 
        message: 'User successfully added!' 
      });
    })
  }
}

function login() {

}

exports.registerUser = registerUser;
