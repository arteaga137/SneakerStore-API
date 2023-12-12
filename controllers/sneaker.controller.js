// Import the Sneaker model from the models file.
const Sneaker = require("../models/sneaker.models");

/**
 * Retrieves all sneakers from the database.
 * 
 * @returns {Promise<Array>} A promise that resolves to an array of sneaker objects.
 */
async function getAllSneakers() {
    const sneakers = await Sneaker.find();
    return sneakers;
}

/**
 * Retrieves a single sneaker by its ID.
 * 
 * @param {String} id - The unique ID of the sneaker to retrieve.
 * @returns {Promise<Object>} A promise that resolves to the sneaker object if found.
 */
async function getSneakerById(id) {
    const sneakerFound = await Sneaker.findById(id);
    return sneakerFound;
}

/**
 * Adds a new sneaker to the database.
 * 
 * @param {String} brand - The brand of the sneaker.
 * @param {String} model - The model of the sneaker.
 * @param {String} colorway - The colorway of the sneaker.
 * @param {String} variant - The variant of the sneaker.
 * @param {Number} size - The size of the sneaker.
 * @param {Boolean} collab - Indicates if the sneaker is a collaboration.
 * @param {Number} stock - The stock quantity of the sneaker.
 * @param {Number} price - The price of the sneaker.
 * @returns {Promise<Object>} A promise that resolves to the newly created sneaker object.
 */
async function addSneaker(brand, model, colorway, variant, size, collab, stock, price) {
    const newSneaker = new Sneaker({
        brand: brand,
        model: model,
        colorway: colorway,
        variant: variant,
        size: size,
        collab: collab,
        stock: stock,
        price: price
    });

    await newSneaker.save();

    return newSneaker;
}

/**
 * Deletes a sneaker from the database by its ID.
 * 
 * @param {String} id - The unique ID of the sneaker to delete.
 * @returns {Promise<Object>} A promise that resolves to the deleted sneaker object.
 */
async function deleteSneaker(id) {
    const sneakerToDelete = await Sneaker.findByIdAndDelete(id);
    return sneakerToDelete;
}

// Export the function modules.
module.exports = {
    getAllSneakers,
    getSneakerById,
    addSneaker,
    deleteSneaker
};