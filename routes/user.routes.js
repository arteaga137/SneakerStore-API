const express = require("express");
const router = express.Router();
//Import all controllers using destructuring
const {
  getAllUsers,
  getUserById,
  addUser,
  deleteUser,
} = require("../controllers/user.controller");

//  CRUD

/**
 * C - Post
 * R - Get and Dinamic Get (by ID)
 * U - Put/patch (optional; not required by proyect description)
 * D - Delete
 */

//POST HTTTP method to create user
router.post("/", async (req, res) => {
    await addUser (
        req.body.firstName.trim(),
        req.body.lastName.trim(),
        req.body.lastName.trim(),
        req.body.password
    );

    res.json({ msg: 'usuario creado correctamente'});
});

//GET http method to see al users DB
router.get("/", async (req, res) => {
    const users = await getAllUsers();

    res.json(users)
});

//GET dinamic http method to check user by ID
router.get("/", async (req, res) => {
    const userFound = await getUserById(req.params.id);
    if(userFound !== undefined) {
        res.json(userFound);
    } else {
        res.json({ msg: 'error: ID invalido'});
    }
});

//DELETE by ID HTTP method
router.delete("/:id", async (req, res) => {
    const deleteUser = await deleteUser(req.params.id);
    if (deleteUser) {
        res.json({ msg: 'usuario borrado!'});
    } else {
        res.json({ msg: 'usuario no encontrado'});
    }
});

module.exports = router;