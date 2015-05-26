/**
 * Created by griz on 5/1/2015.
 */
'use strict';

// Load the 'Client' Mongoose model
var Client = require('mongoose').model('Client');

    var client001 = new Client ({
        'firstName':              'Joseph',
        'middleName':             'Arnold',
        'lastName':               'Smith',
        'dob':                    '01/02/1993',
        'ssn':                    '123456789',
        'height':                 '72',
        'weight':                 '204',
        'clientIdentifier':       'C00145F4',
        'language':               'English',
        'gender':                 'male',
        'primaryMorbidCondition': 'COPD',
        'coMorbidConditions':    [ 'Hypertension','Heart Failure' ],
        'emailAddresses':      [ {'email': 'JSmith@woogle.com',       'type': 'Work',     'verified': false},
                                 {'email': 'JSmith@poogle.com',       'type': 'Personal', 'verified': false},
                                 {'email': 'JSmith@moogle.com',       'type': 'Home',     'verified': false} ],
        'phoneNumbers':        [ {'subscriberNumber': '206-111-3333', 'type': 'Work',     'verified': false},
                                 {'subscriberNumber': '206-111-3334', 'type': 'Personal', 'verified': false,
                                  'mobile': true, 'mobileCarrier': 'AT&T'},
                                 {'subscriberNumber': '206-111-3335', 'type': 'Home',     'verified': false} ],
        'timezone':               'Pacific Standard Time',
        'IVRPin':                 '9483',
        'noReadingThreshold':     '36',
        'timerTimeout':           '128'
    });

    client001.save(function(err){
        if (err) console.log(err);
    });

var client001 = new Client ({
    'firstName':              'Paul',
    'middleName':             'Jackson',
    'lastName':               'Brown',
    'dob':                    '07/08/1947',
    'ssn':                    '987654321',
    'height':                 '63',
    'weight':                 '169',
    'clientIdentifier':       'C0098R4',
    'language':               'English',
    'gender':                 'male',
    'primaryMorbidCondition': 'Asthmatic',
    'coMorbidConditions':    [ 'Diabetes','CAD', 'Trach' ],
    'emailAddresses':      [ {'email': 'PBrown@woogle.com',        'type': 'Work',     'verified': false},
                             {'email': 'PaulB@poogle.com',         'type': 'Personal', 'verified': false},
                             {'email': 'PaulBrown@moogle.com',     'type': 'Home',     'verified': false} ],
    'phoneNumbers':        [ {'subscriberNumber': '206-321-5333',  'type': 'Work',     'verified': false},
                             {'subscriberNumber': '206-321-5334',  'type': 'Personal', 'verified': false,
                              'mobile': true, 'mobileCarrier': 'AT&T'},
                              {'subscriberNumber': '206-321-5335', 'type': 'Home',     'verified': false} ],
    'timezone':               'Pacific Standard Time',
    'IVRPin':                 '4567',
    'noReadingThreshold':     '5',
    'timerTimeout':           '24'
});

client001.save(function(err){
    if (err) console.log(err);
});
var client001 = new Client ({
    'firstName':              'Susie',
    'middleName':             'Marie',
    'lastName':               'Arnold',
    'dob':                    '12/27/2001',
    'ssn':                    '123454321',
    'height':                 '56',
    'weight':                 '119',
    'clientIdentifier':       'C0021H6',
    'language':               'English',
    'gender':                 'female',
    'primaryMorbidCondition': 'CAD',
    'coMorbidConditions':    [ 'Gestatioanal Diabetes','Major Depressive Disorder' ],
    'emailAddresses':      [ {'email': 'SusieMA@woogle.com',      'type': 'Work',     'verified': false},
                             {'email': 'SMArnold@poogle.com',     'type': 'Personal', 'verified': false},
                             {'email': 'SusieArnold@moogle.com',  'type': 'Home',     'verified': false} ],
    'phoneNumbers':        [ {'subscriberNumber': '206-789-3933', 'type': 'Work',     'verified': false},
                             {'subscriberNumber': '206-789-3934', 'type': 'Personal', 'verified': false,
                              'mobile': true, 'mobileCarrier': 'AT&T'},
                             {'subscriberNumber': '206-789-3935', 'type': 'Home',     'verified': false} ],
    'timezone':               'Pacific Standard Time',
    'IVRPin':                 '1234',
    'noReadingThreshold':     '48',
    'timerTimeout':           '124'
});

client001.save(function(err){
    if (err) console.log(err);

});