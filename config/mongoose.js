/**
 * Created by griz on 4/29/2015.
 */
// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var	config = require('./config'),
    mongoose = require('mongoose');

// Define the Mongoose configuration method
module.exports = function() {
    // Use Mongoose to connect to MongoDB
    var db = mongoose.connect(config.db);

    // Load the 'Client' model
   require('../models/clients.server.model.js');

    // Load the 'Rpm' model
    require('../models/rpm.server.model.js');


    // Return the Mongoose connection instance
    return db;
};