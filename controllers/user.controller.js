// Import the User model from the models file.
const User = require("../models/user.models");

/**
 * Retrieves all Users from the database.
 * 
 * @returns {Promise<Array>} A promise that resolves to an array of sneaker objects.
 */
async function getAllUsers() {
    const Users = await User.find();
    return Users;
}

/**
 * Retrieves a single user by its ID.
 * 
 * @param {String} id - The unique ID of the user to retrieve.
 * @returns {Promise<Object>} A promise that resolves to the user object if found.
 */
async function getUserById(id) {
    const userFound = await User.findById(id);
    return userFound;
}

/**
 * Adds a new user to the database.
 * 
 * @param {String} firstName - User's first name.
 * @param {String} lastName - user's last name.
 * @param {String} email - user's email.
 * @param {String} password - user's password.
 * @returns {Promise<Object>} A promise that resolves to the newly created user object.
 */
async function addUser(firstName, lastName, email, password) {
    const newUser = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    });

    await newUser.save();

    return newUser;
}

/**
 * Deletes an user from the database by its ID.
 * 
 * @param {String} id - The unique ID of the sneaker to delete.
 * @returns {Promise<Object>} A promise that resolves to the deleted sneaker object.
 */
async function deleteUser(id) {
    const userToDelete = await User.findByIdAndDelete(id);
    return userToDelete;
}

// Export the function modules.
module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    deleteUser
};