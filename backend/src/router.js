const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const CharacterControllers = require("./controllers/CharacterControllers");

// Route to get a list of items
router.get("/character", CharacterControllers.browse);

// Route to get a specific item by ID
router.get("/character/:id", CharacterControllers.read);

// Route to add a new item
router.post("/character", CharacterControllers.add);

// Route to update items
router.put("/character/:id", CharacterControllers.update);

// Route to delete items
router.delete("/character/:id", CharacterControllers.destroy);

/* ************************************************************************* */

module.exports = router;
