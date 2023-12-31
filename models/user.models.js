const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true, // This prevents various users with the same e-mail
          },
    password: {
        type: String,
        required: true
        }
    });

const Users = mongoose.model('users', userSchema);
module.exports = Users;