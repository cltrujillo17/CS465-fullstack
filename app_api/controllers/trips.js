const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register the Trip model
const Model = mongoose.model('trips'); // Get the Trip model

//GET: /trips - lists all trips

const tripsList = async (req, res) => {
    const q = await Model
        .find({})   // no filter, return all records
        .exec();
        
        //Uncomment the following line to see the query results in the console
        //console.log(q);

    if(!q) 
    {
     return res
        .status(404)
        .json({err});
    }else
    {
        return res
        .status(200)
        .json(q);
    }
};

//GET: /trips/:tripCode - lists a single trip by its code
// Regardless of outcome, response must innclude HTML status code
// and JSON message to the requesting client

const tripsFindByCode = async (req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode})   // return single record
        .exec();
        
        //Uncomment the following line to see the query results in the console
        //console.log(q);

    if(!q) 
    { // Database returned no data
     return res
        .status(404)
        .json({err});
    }else
    { // Return resulting trip list
     return res
        .status(200)
        .json(q);
    }
}

// POST: /trips - creates a new trip
// Regardless of outcome, response must include HTTP status
// code and JSON message to the requesting client

const tripsAddTrip = async (req, res) => {
    const newTrip = new Trip({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });

    const q = await newTrip.save();

    if (!q) { // Database returned no data
        return res
            .status(400)
            .json({err});
    } else { // Return new trip
        return res
            .status(201)
            .json(q);
    }
};


// PUT: /trips/:tripCode — Updates an existing trip
// Regardless of outcome, response must include HTTP status
// code and JSON message to the requesting client

const tripsUpdateTrip = async (req, res) => {

    // Debug logs
    console.log(req.params);
    console.log(req.body);
  
    try {
  
      const q = await Model.findOneAndUpdate(
        { code: req.params.tripCode },
        {
          code: req.body.code,
          name: req.body.name,
          length: req.body.length,
          start: req.body.start,
          resort: req.body.resort,
          perPerson: req.body.perPerson,
          image: req.body.image,
          description: req.body.description
        },
        { new: true } // return updated document
      ).exec();
  
      if (!q) {
        // No trip found
        return res
          .status(404)
          .json({err});
      }
  
      // Successfully updated
      return res
        .status(200)
        .json(q);
  
    } catch (err) {
  
      return res
        .status(500)
        .json({ message: err.message });
  
    }
  };

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};