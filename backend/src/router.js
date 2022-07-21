const express = require("express");

const { ItemController, favoriteController } = require("./controllers");

const router = express.Router();

router.get("/favorite", favoriteController.browse);
router.post("/favorite", favoriteController.add);

router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.delete("/items/:id", ItemController.delete);

module.exports = router;
