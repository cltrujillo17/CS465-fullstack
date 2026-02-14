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

module.exports = {
    tripsList
};