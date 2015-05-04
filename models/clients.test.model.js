/**
 * Created by griz on 5/1/2015.
 */
'use strict';

// Load the 'Client' Mongoose model
var Client = require('mongoose').model('Client');

    var client001 = new Client ({
        'firstName':          'Joseph',
        'middleName':         'Arnold',
        'lastName':           'Smith',
        'dob':                '01/02/1993',
        'ssn':                '123456789',
        'height':             '72',
        'weight':             '204',
        'clientIdentifier':  'C00145F4',
        'language':           'English',
        'gender':             'male',
        'coMorbidConditions':  ['Trach','COPD'],
        'emailAddresses':     [ {'email': 'JSmith@woogle.com', 'type': 'Work',     'verified': false},
                                {'email': 'JSmith@poogle.com', 'type': 'Personal', 'verified': false},
                                {'email': 'JSmith@moogle.com', 'type': 'Home',   'verified': false} ],
        'phoneNumbers':       [ {'subscriberNumber': '206-111-3333', 'type': 'Work',     'verified': false},
                                {'subscriberNumber': '206-111-3334', 'type': 'Personal', 'verified': false,
                                 'mobile': true, 'mobileCarrier': 'AT&T'},
                                {'subscriberNumber': '206-111-3335', 'type': 'Home',     'verified': false} ]
    });

    client001.save(function(err){
        console.log(err);
    });

