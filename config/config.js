/**
 * Created by griz on 4/30/2015.
 */
// Invoke 'strict' JavaScript mode
'use strict';

// Load the correct configuration file according to the 'NODE_ENV' variable
module.exports = require('./env/' + process.env.NODE_ENV + '.js');
