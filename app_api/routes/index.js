const express = require('express');  //Express app
const router = express.Router();  //Router Logic

// this is where we import the controllers we will use to handle the routes

const tripsController = require('../controllers/trips'); // Import the trips controller

//define route for our trips endpoint, which will use the tripsController to handle GET requests to list all trips
router
    .route('/trips')
    .get(tripsController.tripsList)         // GET /trips - lists all trips
    .post (tripsController.tripsAddTrip)    // POST /trips - creates a new trip
    .put(tripsController.tripsUpdateTrip);  // PUT /trips - updates an existing trip

router 
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode); // GET /trips/:tripCode - lists a single trip by its code

module.exports = router;