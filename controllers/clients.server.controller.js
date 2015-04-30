/**
 * Created by griz on 4/30/2015.
 */
// Invoke 'strict' JavaScript mode
'use strict';

// Load the 'Client' Mongoose model
var Client = require('mongoose').model('Client');

// Create a new 'create' controller method
exports.create = function(req, res, next) {
    // Create a new instance of the 'Client' Mongoose model
    var client = new Client(req.body);

    // Use the 'Client' instance's 'save' method to save a new client document
    client.save(function(err) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Use the 'response' object to send a JSON response
            res.json(client);
        }
    });
};

// Create a new 'list' controller method
exports.list = function(req, res, next) {
    // Use the 'Client' static 'find' method to retrieve the list of clients
    Client.find({}, function(err, clients) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Use the 'response' object to send a JSON response
            res.json(clients);
        }
    });
};

// Create a new 'read' controller method
exports.read = function(req, res) {
    // Use the 'response' object to send a JSON response
    res.json(req.client);
};

// Create a new 'update' controller method
exports.update = function(req, res, next) {
    // Use the 'Client' static 'findByIdAndUpdate' method to update a specific client
    Client.findByIdAndUpdate(req.client.id, req.body, function(err, client) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Use the 'response' object to send a JSON response
            res.json(client);
        }
    })
};

// Create a new 'delete' controller method
exports.delete = function(req, res, next) {
    // Use the 'Client' instance's 'remove' method to save a new client document
    req.client.remove(function(err) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Use the 'response' object to send a JSON response
            res.json(req.client);
        }
    })
};

// Create a new 'clientByID' controller method
exports.clientByID = function(req, res, next, id) {
    // Use the 'Client' static 'findOne' method to retrieve a specific client
    Client.findOne({
        _id: id
    }, function(err, client) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Set the 'req.client' property
            req.client = client;

            // Call the next middleware
            next();
        }
    });
};
