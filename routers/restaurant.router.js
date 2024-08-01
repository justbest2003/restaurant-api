const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurant.controller");
const { authJwt } = require("../middlewares");

//POST : http://localhost:5000/api/v1/restaurants/
//Create a restaurant
router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdminOrMod],
  restaurantController.create
);

//Get All restaurant
router.get("/", restaurantController.getAll);

//Get a restaurant by ID
router.get("/:id", [authJwt.verifyToken], restaurantController.getById);

//Put a restaurant by ID
router.put(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdminOrMod],
  restaurantController.update
);

//Delete a restaurant by ID
router.delete(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  restaurantController.delete
);

module.exports = router;
