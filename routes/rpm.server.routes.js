/**
 * Created by griz on 4/30/2015.
 */
// Invoke 'strict' JavaScript mode
'use strict';

// Load the 'rpm' controller
var rpm = require('../controllers/rpm.server.controller.js');

// Define the routes module' method
module.exports = function(app) {
    // Set up the 'rpm' base routes
    app.route('/rpm')
     //   .post(rpm.create)
        .get(rpm.list);

    // Set up the 'clients' parameterized routes
    app.route('/rpm/:rpmId')
        .get(rpm.read)
       // .put(rpm.update)
     //   .delete(rpm.delete);

    // Set up the 'clientID' parameter middleware
 //   app.param('rpmId', rpm.rpmByID);
};