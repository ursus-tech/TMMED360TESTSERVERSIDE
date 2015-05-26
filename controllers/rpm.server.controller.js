/**
 * Created by griz on 4/30/2015.
 */
// Invoke 'strict' JavaScript mode
'use strict';

// Load the 'Rpm' Mongoose model
var Rpm = require('mongoose').model('Rpm');
var rpmtest = require('../models/rpm.test.model');

// Create a new 'create' controller method
exports.create = function(req, res, next) {
    // Create a new instance of the 'Rpm' Mongoose model
    var rpm = new Rpm(req.body);

    // Use the 'Rpm' instance's 'save' method to save a new rpm document
    rpm.save(function(err) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Use the 'response' object to send a JSON response
            res.json(rpm);
        }
    });
};
exports.list = function(req, res, next) {
    var requestStartDate = new Date("2015-05-01 00:00:00");
    var requestEndDate = new Date("2015-05-29 00:00:00");
    var pdocDateStart = new Date(requestStartDate.getTime());
    var pdocDateEnd = new Date(requestEndDate.getTime());

    pdocDateStart.setHours(0);
    pdocDateStart.setMinutes(0);
    pdocDateStart.setSeconds(0);
    pdocDateStart.setMilliseconds(0);

    pdocDateEnd.setHours(23);
    pdocDateEnd.setMinutes(59);
    pdocDateEnd.setSeconds(59);
    pdocDateEnd.setMilliseconds(999);

    if (requestStartDate.getDate() < 15) {
        pdocDateStart.setDate(1);
    } else {
        pdocDateStart.setDate(15);
    }

    if (requestEndDate.getDate() < 15) {
        pdocDateEnd.setDate(1);
    } else {
        pdocDateEnd.setDate(15);
    }

    var pepsiode = 1;
    var query = {
        'episode': pepsiode,
        'documentDate': {'$gte': pdocDateStart, '$lt': pdocDateEnd}
    };
    var fields = {};

    var options = {
        sort: {
            documentDate: -1
        }
    };

//Rpm.find(query, fields, options, callback)

//Rpm.find({ 'episode': '1',  'documentDate': { '$gte' : new Date("2015-05-01 00:00:00"),'$lt' : new Date("2015-05-02 00:00:00")  }}).lean().exec(function (err, rpms) {
    Rpm.find(query, fields, options).lean().exec(function (err, rpms) {
        if (err) return handleError(err);
        //console.log("Entire JSON Results");
        if (rpms[0] === undefined || rpms[0] === null) {
            console.log("Nothing found in query");
            return;
        }
        // printResults
        //rpmutils.prettyPrint(rpms, {type: 'document', indent: ''});

        // Now we to build an array of results
        var results = [];
        for (var result in rpms) {
            var document = JSON.parse(JSON.stringify(rpms[result]));
            for (var daily in document.dailyMeasurements) {
                ;
                var dayRecord = document.dailyMeasurements[daily];
                var dataDay = new Date(dayRecord.date);
                if ((dataDay >= requestStartDate) && (dataDay <= requestEndDate)) {
                    //console.log('Accepted: ' + dataDay);
                    dayRecord._documentId = document._id;
                    dayRecord._client = document._client;
                    dayRecord.episode = document.episode;
                    dayRecord.documentDate = document.documentDate;
                    results.push(dayRecord);
                }
            }
        }
       // console.log(JSON.stringify(results));
        //rpmutils.prettyPrint(results, {type: 'results', indent: ''});
        res.json (results);
    })
};

/*
exports.list = function(req, res, next) {
    // Use the 'Rpm' static 'find' method to retrieve the list of rpm
    Rpm.find({}, function(err, rpm) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Use the 'response' object to send a JSON response
            rpm.forEach( function (rpm) {
                //console.log(rpm.ssn);
            });
            // for (var j = 0; j < rpm.length; j++){
            //         rpm[j].ssn = "12";
            //     };
            res.json(rpm);
        }
    });
};
*/

// Create a new 'read' controller method
exports.read = function(req, res) {
    // Use the 'response' object to send a JSON response
    res.json(req.rpm);
};

// Create a new 'update' controller method
exports.update = function(req, res, next) {
    // Use the 'Rpm' static 'findByIdAndUpdate' method to update a specific rpm
    Rpm.findByIdAndUpdate(req.rpm.id, req.body, function(err, rpm) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Use the 'response' object to send a JSON response
            res.json(rpm);
        }
    })
};

// Create a new 'delete' controller method
exports.delete = function(req, res, next) {
    // Use the 'Rpm' instance's 'remove' method to save a new rpm document
    req.rpm.remove(function(err) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Use the 'response' object to send a JSON response
            res.json(req.rpm);
        }
    })
};

// Create a new 'rpm' controller method
exports.rpm = function(req, res, next, id) {
    // Use the 'Rpm' static 'findOne' method to retrieve a specific rpm
    Rpm.findOne({
        _id: id
    }, function(err, rpm) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Set the 'req.rpm' property
            req.rpm = rpm;

            // Call the next middleware
            next();
        }
    });
};
