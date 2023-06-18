const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  roles: [{
    type: Schema.Types.ObjectId,
    ref: 'Role'
  }],

  lvl: {
    type: Number,
    default: 0
  },
  exp: {
    type: Number,
    default: 0
  },
  profilePicture_url: {
    type: String,
    default: ''
  },
  gender: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  skills: [{
    type: Schema.Types.ObjectId,
    ref: 'Skill'
  }]
});

module.exports = mongoose.model('User', UserSchema);
