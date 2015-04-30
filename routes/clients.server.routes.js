/**
 * Created by griz on 4/30/2015.
 */
// Invoke 'strict' JavaScript mode
'use strict';

// Load the 'clients' controller
var clients = require('../controllers/clients.server.controller.js');

// Define the routes module' method
module.exports = function(app) {
    // Set up the 'clients' base routes
    app.route('/clients')
        .post(clients.create)
        .get(clients.list);

    // Set up the 'clients' parameterized routes
    app.route('/clients/:clientId')
        .get(clients.read)
        .put(clients.update)
        .delete(clients.delete);

    // Set up the 'clientID' parameter middleware
    app.param('clientId', clients.clientByID);
};