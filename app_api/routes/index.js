const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

// GET method routes tripList
router
    .route("/trips")
    .get(tripsController.tripsList) //GET method routes tripList
    .post(tripsController.tripsAddTrip); // POST method Adds a Trip

// GET method routes tripList
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;