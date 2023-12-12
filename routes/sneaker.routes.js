const express = require("express");
const router = express.Router();
//Import all controllers using destructuring
const {
  getAllSneakers,
  getSneakerById,
  addSneaker,
  deleteSneaker,
} = require("../controllers/sneaker.controller");

//  CRUD

/**
 * C - Post
 * R - Get and Dinamic Get (by ID)
 * U - Put/patch (optional; not required by proyect description)
 * D - Delete
 */

// POST HTTP method to create sneaker
router.post("/", async (req, res) => {
  await addSneaker(
    req.body.brand.trim(),
    req.body.model.trim(),
    req.body.colorway.trim(),
    req.body.variant.trim(),
    req.body.size, // trim method does not work with numbers??
    req.body.collab.trim(),
    req.body.stock,
    req.body.price
  );

  res.json({ msg: "sneaker añadido" });
});

//Get http method for checking complete DB
router.get("/", async (req, res) => {
  const sneakers = await getAllSneakers();

  res.json(sneakers);
});

// Dinamic Get http method to check sneaker by ID (Maybe I should do it by other criteria. Ill check if I can improve it after completing the project)
router.get("/:id", async (req, res) => {
  const sneakerFound = await getSneakerById(req.params.id);
  if (sneakerFound !== undefined) {
    res.json(sneakerFound);
  } else {
    res.json({ msg: "error: sin stock" });
  }
});

//Delete http method to delte sneaker by ID
router.delete("/:id", async (req, res) => {
  const sneakerDeleted = await deleteSneaker(req.params.id);
  if (sneakerDeleted) {
    res.json({ msg: "sneaker borrado!" });
  } else {
    res.json({ msg: "sneaker no encontrado" });
  }
});

module.exports = router;
