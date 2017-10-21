const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Promise = require('promise');

// Patch mongoose.Promise implementation
mongoose.Promise = Promise;
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  passwordConfirmation: {
    type: String,
    required: true,
  }
});


/** 
 * Before saving the user credentials, encrypt the password
 * ---
 * DO NOT use lambdas since I want 'this' to be the UserSchema
 */
UserSchema.pre('save', function(next) { 
  bcrypt.hash(this.password, saltRounds)
    .then(hash => {
      this.password = hash;
      next();
    })
    .catch(err => next(err))
});


UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password);
}


module.exports = mongoose.model('User', UserSchema);
