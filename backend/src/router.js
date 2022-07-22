const express = require("express");

const {
  favoriteController,
  usersController,
  AuthController,
} = require("./controllers");

const router = express.Router();

router.get("/favorite", favoriteController.browse);
router.post("/favorite", favoriteController.add);
router.delete("/favorite/:id", favoriteController.delete);

router.post("/user", usersController.add);

router.post("/auth", AuthController.session);

// router.get("/items/:id", ItemController.read);
// router.put("/items/:id", ItemController.edit);
// router.delete("/items/:id", ItemController.delete);

module.exports = router;
