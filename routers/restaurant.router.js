const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurant.controller");

//Create a restaurant
//POST : http://localhost:5000/api/v1/restaurants/
router.post("/", restaurantController.create);

//Get All restaurant
router.get("/", restaurantController.getAll);

//Get a restaurant by ID
router.get("/:id", restaurantController.getById);

//Put a restaurant by ID
router.put("/:id", restaurantController.update);

//Delete a restaurant by ID
router.delete("/:id", restaurantController.delete);

module.exports = router;
