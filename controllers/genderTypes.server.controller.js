/**
 * Created by griz on 4/30/2015.
 */
// Invoke 'strict' JavaScript mode
'use strict';

// Load the 'GenderTypes' Mongoose model
var GenderTypes = require('mongoose').model('GenderTypes');

// Create a new 'create' controller method
exports.create = function(req, res, next) {
    // Create a new instance of the 'GenderTypes' Mongoose model
    var genderTypes = new GenderTypes(req.body);

    // Use the 'GenderTypes' instance's 'save' method to save a new genderTypes document
    genderTypes.save(function(err) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Use the 'response' object to send a JSON response
            res.json(genderTypes);
        }
    });
};

// Create a new 'list' controller method
exports.list = function(req, res, next) {
    // Use the 'GenderTypes' static 'find' method to retrieve the list of genderTypess
    GenderTypes.find({}, function(err, genderTypess) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Use the 'response' object to send a JSON response
        genderTypess.forEach( function (genderTypes) {
            console.log(genderTypes.ssn);
        });
           // for (var j = 0; j < genderTypess.length; j++){
           //         genderTypess[j].ssn = "12";
           //     };
            res.json(genderTypess);
        }
    });
};

// Create a new 'read' controller method
exports.read = function(req, res) {
    // Use the 'response' object to send a JSON response
    res.json(req.genderTypes);
};

// Create a new 'update' controller method
exports.update = function(req, res, next) {
    // Use the 'GenderTypes' static 'findByIdAndUpdate' method to update a specific genderTypes
    GenderTypes.findByIdAndUpdate(req.genderTypes.id, req.body, function(err, genderTypes) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Use the 'response' object to send a JSON response
            res.json(genderTypes);
        }
    })
};

// Create a new 'delete' controller method
exports.delete = function(req, res, next) {
    // Use the 'GenderTypes' instance's 'remove' method to save a new genderTypes document
    req.genderTypes.remove(function(err) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Use the 'response' object to send a JSON response
            res.json(req.genderTypes);
        }
    })
};

// Create a new 'genderTypesByID' controller method
exports.genderTypesByID = function(req, res, next, id) {
    // Use the 'GenderTypes' static 'findOne' method to retrieve a specific genderTypes
    GenderTypes.findOne({
        _id: id
    }, function(err, genderTypes) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Set the 'req.genderTypes' property
            req.genderTypes = genderTypes;

            // Call the next middleware
            next();
        }
    });
};
