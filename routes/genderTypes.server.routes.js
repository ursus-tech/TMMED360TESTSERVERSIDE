/**
 * Created by griz on 4/30/2015.
 */
// Invoke 'strict' JavaScript mode
'use strict';

// Load the 'clients' controller
var genderTypes = require('../controllers/genderTypes.server.controller.js');

// Define the routes module' method
module.exports = function(app) {
    // Set up the 'genderTypess' base routes
    app.route('/genderTypes')
    //    .post(genderTypes.create)
        .get(genderTypes.list);

    // Set up the 'genderTypes' parameterized routes
    app.route('/genderTypes/:genderTypeId')
          .get(genderTypes.read)
     //   .put(genderTypes.update)
    //    .delete(genderTypes.delete);

    // Set up the 'genderTypesID' parameter middleware
    app.param('genderTypesId', genderTypes.genderTypesByID);
};