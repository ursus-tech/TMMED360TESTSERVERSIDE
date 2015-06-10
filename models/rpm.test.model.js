/**
 * Created by griz on 5/1/2015.
 */
'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var moment = require('moment');

// Load the 'Client' Mongoose model
var Rpm = require('mongoose').model('Rpm');

var rpmutils = require('./rpm.utils.server.model');


// Get a timestamp in seconds
function generateObjectId(year, month, day) {
    var m = String(Number(month) - 1)
    var date = new Date();
    date.setFullYear(year);
    date.setMonth(m); // 0-11
    date.setDate(day);
    var timestamp = Math.floor(date.getTime() / 1000);
    var id = new mongoose.Types.ObjectId(timestamp);
    return(id);
};


var rpm001 = new Rpm ({
    '_id':                    generateObjectId('2015','5','1'),
    'episode':                '1',
   // '_client':                Schema.ObjectId('5554d063512cb81025074bac'),
    '_client':                '555f6615436259f8363643b7',
    'documentDate':           new Date(2015, 4, 1, 0, 0, 0, 0),
    'dailyMeasurements':      [
        {  // Daily Reading - START
            'date': new Date(2015, 4, 1, 0, 0, 0, 0),
            'bodyMeasurements': [
                {
                    'date': new Date(2015, 4, 1, 10, 2, 0, 0),
                    'height': '68.5',
                    'weight': '231.6'
                }
            ],
            'vitalMeasurements': [
                {
                    'date': new Date(2015, 4, 1, 10, 4, 0, 0),
                    'temperature': '98.6',
                    'bpSystolic': '150',
                    'bpDiastolic': '105',
                    'meanArterialPressure': '120',
                    'pulseRate': '78',
                    'pulsePattern': 'Regular'
                }
            ],
            'copdMeasurements': [
                {
                    'date': new Date(2015, 4, 1, 10, 6, 0, 0),
                    'respirationRate': '17',
                    'pef': '350',
                    'fev1': '100',
                    'fev1Pred': '80',
                    'o2Sat': '99'
                },
            ],
            'diabetesMeasurements': [
                {
                    'date': new Date(2015, 4, 1, 10, 8, 0, 0),
                    'glyco': '5',
                    'glucometer': '105'
                },
            ],
            'chfMeasurements': [
                {
                    'date': new Date(2015, 4, 1, 10, 10, 0, 0),
                    'ankleEdemaRt': '1',
                    'ankleEdemaLt': '2',
                    'pedalEdemRt': '3',
                    'pedalEdemaLt': '4',
                    'pretibialEdemRt': '4',
                    'pretibialEdemaLt': '3',
                    'dyspneaAssessment': '2',
                    'vasMethod': '80',
                    'likertMethod': '1'
                }
            ]
        }, // Daily Reading - END
        {  // Daily Reading - START
            'date': new Date(2015, 4, 8, 0, 0, 0, 0),
            'bodyMeasurements': [
                {
                    'date': new Date(2015, 4, 8, 11, 3, 0, 0),
                    'height': '58.5',
                    'weight': '221.6'
                }
            ],
            'vitalMeasurements': [
                {
                    'date': new Date(2015, 4, 8, 11, 3, 45, 0),
                    'temperature': '97.6',
                    'bpSystolic': '103',
                    'bpDiastolic': '100',
                    'meanArterialPressure': '121',
                    'pulseRate': '87',
                    'pulsePattern': 'Regular'
                },
                {
                    'date': new Date(2015, 4, 8, 11, 5, 43, 0),
                    'temperature': '98.6',
                    'bpSystolic': '170',
                    'bpDiastolic': '95',
                    'meanArterialPressure': '130',
                    'pulseRate': '97',
                    'pulsePattern': 'Regular'
                }
            ],
            'copdMeasurements': [
                {
                    'date': new Date(2015, 4, 8, 11,6, 0, 0),
                    'respirationRate': '18',
                    'pef': '352',
                    'fev1': '102',
                    'fev1Pred': '82',
                    'o2Sat': '99.2'
                },
            ],
            'diabetesMeasurements': [
                {
                    'date': new Date(2015, 4, 8, 11, 9, 0, 0),
                    'glyco': '6',
                    'glucometer': '103'
                },
            ],
            'chfMeasurements': [
                {
                    'date': new Date(2015, 4, 8, 11, 12, 0, 0),
                    'ankleEdemaRt': '2',
                    'ankleEdemaLt': '2',
                    'pedalEdemRt': '3',
                    'pedalEdemaLt': '2',
                    'pretibialEdemRt': '4',
                    'pretibialEdemaLt': '3',
                    'dyspneaAssessment': '2',
                    'vasMethod': '81',
                    'likertMethod': '2'
                }
            ]
        }, // Daily Reading - END
        {  // Daily Reading - START
            'date': new Date(2015, 4, 2, 0, 0, 0, 0),
            'bodyMeasurements': [
                {
                    'date': new Date(2015, 4, 2, 11, 3, 0, 0),
                    'height': '58.5',
                    'weight': '221.6'
                }
            ],
            'vitalMeasurements': [
                {
                    'date': new Date(2015, 4, 2, 11, 3, 45, 0),
                    'temperature': '97.6',
                    'bpSystolic': '103',
                    'bpDiastolic': '100',
                    'meanArterialPressure': '121',
                    'pulseRate': '87',
                    'pulsePattern': 'Regular'
                },
                {
                    'date': new Date(2015, 4, 2, 11, 5, 43, 0),
                    'temperature': '98.6',
                    'bpSystolic': '170',
                    'bpDiastolic': '95',
                    'meanArterialPressure': '130',
                    'pulseRate': '97',
                    'pulsePattern': 'Regular'
                }
            ],
            'copdMeasurements': [
                {
                    'date': new Date(2015, 4, 2, 11,6, 0, 0),
                    'respirationRate': '18',
                    'pef': '352',
                    'fev1': '102',
                    'fev1Pred': '82',
                    'o2Sat': '99.2'
                },
            ],
            'diabetesMeasurements': [
                {
                    'date': new Date(2015, 4, 2, 11, 9, 0, 0),
                    'glyco': '6',
                    'glucometer': '103'
                },
            ],
            'chfMeasurements': [
                {
                    'date': new Date(2015, 4, 2, 11, 12, 0, 0),
                    'ankleEdemaRt': '2',
                    'ankleEdemaLt': '2',
                    'pedalEdemRt': '3',
                    'pedalEdemaLt': '2',
                    'pretibialEdemRt': '4',
                    'pretibialEdemaLt': '3',
                    'dyspneaAssessment': '2',
                    'vasMethod': '81',
                    'likertMethod': '2'
                }
            ]
        } // Daily Reading - END
    ]
});

var rpm002 = new Rpm ({
    '_id':                    generateObjectId('2015','5','15'),
    'episode':                '1',
    // '_client':                Schema.ObjectId('5554d063512cb81025074bac'),
    '_client':                '555f6615436259f8363643b7',
    'documentDate':           new Date(2015, 4, 15, 0, 0, 0, 0),
    'dailyMeasurements':      [
        {  // Daily Reading - START
            'date': new Date(2015, 4, 19, 0, 0, 0, 0),
            'bodyMeasurements': [
                {
                    'date': new Date(2015, 4, 19, 10, 2, 0, 0),
                    'height': '68.5',
                    'weight': '231.6'
                }
            ],
            'vitalMeasurements': [
                {
                    'date': new Date(2015, 4, 19, 10, 4, 0, 0),
                    'temperature': '98.6',
                    'bpSystolic': '150',
                    'bpDiastolic': '105',
                    'meanArterialPressure': '120',
                    'pulseRate': '78',
                    'pulsePattern': 'Regular'
                }
            ],
            'copdMeasurements': [
                {
                    'date': new Date(2015, 4, 19, 10, 6, 0, 0),
                    'respirationRate': '17',
                    'pef': '350',
                    'fev1': '100',
                    'fev1Pred': '80',
                    'o2Sat': '99'
                },
            ],
            'diabetesMeasurements': [
                {
                    'date': new Date(2015, 4, 19, 10, 8, 0, 0),
                    'glyco': '5',
                    'glucometer': '105'
                },
            ],
            'chfMeasurements': [
                {
                    'date': new Date(2015, 4, 19, 10, 10, 0, 0),
                    'ankleEdemaRt': '1',
                    'ankleEdemaLt': '2',
                    'pedalEdemRt': '3',
                    'pedalEdemaLt': '4',
                    'pretibialEdemRt': '4',
                    'pretibialEdemaLt': '3',
                    'dyspneaAssessment': '2',
                    'vasMethod': '80',
                    'likertMethod': '1'
                }
            ]
        }, // Daily Reading - END
        {  // Daily Reading - START
            'date': new Date(2015, 4, 26, 0, 0, 0, 0),
            'bodyMeasurements': [
                {
                    'date': new Date(2015, 4, 26, 11, 3, 0, 0),
                    'height': '58.5',
                    'weight': '221.6'
                }
            ],
            'vitalMeasurements': [
                {
                    'date': new Date(2015, 4, 26, 11, 3, 45, 0),
                    'temperature': '97.6',
                    'bpSystolic': '103',
                    'bpDiastolic': '100',
                    'meanArterialPressure': '121',
                    'pulseRate': '87',
                    'pulsePattern': 'Regular'
                },
                {
                    'date': new Date(2015, 4, 26, 11, 5, 43, 0),
                    'temperature': '98.6',
                    'bpSystolic': '170',
                    'bpDiastolic': '95',
                    'meanArterialPressure': '130',
                    'pulseRate': '97',
                    'pulsePattern': 'Regular'
                }
            ],
            'copdMeasurements': [
                {
                    'date': new Date(2015, 4, 26, 11,6, 0, 0),
                    'respirationRate': '18',
                    'pef': '352',
                    'fev1': '102',
                    'fev1Pred': '82',
                    'o2Sat': '99.2'
                },
            ],
            'diabetesMeasurements': [
                {
                    'date': new Date(2015, 4, 26, 11, 9, 0, 0),
                    'glyco': '6',
                    'glucometer': '103'
                },
            ],
            'chfMeasurements': [
                {
                    'date': new Date(2015, 4, 26, 11, 12, 0, 0),
                    'ankleEdemaRt': '2',
                    'ankleEdemaLt': '2',
                    'pedalEdemRt': '3',
                    'pedalEdemaLt': '2',
                    'pretibialEdemRt': '4',
                    'pretibialEdemaLt': '3',
                    'dyspneaAssessment': '2',
                    'vasMethod': '81',
                    'likertMethod': '2'
                }
            ]
        }, // Daily Reading - END
        {  // Daily Reading - START
            'date': new Date(2015, 4, 20, 0, 0, 0, 0),
            'bodyMeasurements': [
                {
                    'date': new Date(2015, 4, 20, 11, 3, 0, 0),
                    'height': '58.5',
                    'weight': '221.6'
                }
            ],
            'vitalMeasurements': [
                {
                    'date': new Date(2015, 4, 20, 11, 3, 45, 0),
                    'temperature': '97.6',
                    'bpSystolic': '103',
                    'bpDiastolic': '100',
                    'meanArterialPressure': '121',
                    'pulseRate': '87',
                    'pulsePattern': 'Regular'
                },
                {
                    'date': new Date(2015, 4, 20, 11, 5, 43, 0),
                    'temperature': '98.6',
                    'bpSystolic': '170',
                    'bpDiastolic': '95',
                    'meanArterialPressure': '130',
                    'pulseRate': '97',
                    'pulsePattern': 'Regular'
                }
            ],
            'copdMeasurements': [
                {
                    'date': new Date(2015, 4, 20, 11,6, 0, 0),
                    'respirationRate': '18',
                    'pef': '352',
                    'fev1': '102',
                    'fev1Pred': '82',
                    'o2Sat': '99.2'
                },
            ],
            'diabetesMeasurements': [
                {
                    'date': new Date(2015, 4, 20, 11, 9, 0, 0),
                    'glyco': '6',
                    'glucometer': '103'
                },
            ],
            'chfMeasurements': [
                {
                    'date': new Date(2015, 4, 20, 11, 12, 0, 0),
                    'ankleEdemaRt': '2',
                    'ankleEdemaLt': '2',
                    'pedalEdemRt': '3',
                    'pedalEdemaLt': '2',
                    'pretibialEdemRt': '4',
                    'pretibialEdemaLt': '3',
                    'dyspneaAssessment': '2',
                    'vasMethod': '81',
                    'likertMethod': '2'
                }
            ]
        }, // Daily Reading - END
        {  // Daily Reading - START
            'date': new Date(2015, 4, 29, 0, 0, 0, 0),
            'bodyMeasurements': [
                {
                    'date': new Date(2015, 4, 29, 17, 3, 0, 0),
                    'height': '58.5',
                    'weight': '221.6'
                }
            ],
            'vitalMeasurements': [
                {
                    'date': new Date(2015, 4, 29, 17, 3, 45, 0),
                    'temperature': '97.6',
                    'bpSystolic': '103',
                    'bpDiastolic': '100',
                    'meanArterialPressure': '121',
                    'pulseRate': '87',
                    'pulsePattern': 'Regular'
                },
                {
                    'date': new Date(2015, 4, 29, 17, 5, 43, 0),
                    'temperature': '98.6',
                    'bpSystolic': '170',
                    'bpDiastolic': '95',
                    'meanArterialPressure': '130',
                    'pulseRate': '97',
                    'pulsePattern': 'Regular'
                }
            ],
            'copdMeasurements': [
                {
                    'date': new Date(2015, 4, 29, 17,6, 0, 0),
                    'respirationRate': '18',
                    'pef': '352',
                    'fev1': '102',
                    'fev1Pred': '82',
                    'o2Sat': '99.2'
                },
            ],
            'diabetesMeasurements': [
                {
                    'date': new Date(2015, 4, 29, 17, 9, 0, 0),
                    'glyco': '6',
                    'glucometer': '103'
                },
            ],
            'chfMeasurements': [
                {
                    'date': new Date(2015, 4, 29, 17, 12, 0, 0),
                    'ankleEdemaRt': '2',
                    'ankleEdemaLt': '2',
                    'pedalEdemRt': '3',
                    'pedalEdemaLt': '2',
                    'pretibialEdemRt': '4',
                    'pretibialEdemaLt': '3',
                    'dyspneaAssessment': '2',
                    'vasMethod': '81',
                    'likertMethod': '2'
                }
            ]
        } // Daily Reading - END
    ]
});


rpm001.save(function(err){
   // if (err) console.log(err);
});
rpm002.save(function(err){
   // if (err) console.log(err);
});

var conditions = { }
    , update =  { $push: { dailyMeasurements: { $each: [ ], $sort: { date: -1 } }} }
    , options = { multi: true };

Rpm.update(conditions, update, options, callback);

function callback (err, numAffected) {
    //console.log(numAffected);
    // numAffected is the number of updated documents
};
/*
var rpm002 = new Rpm ({
    '_id': generateObjectId('2015', '4', '1'),
    'episode': '1',
    '_client': '555f6615436259f8363643b7',
    'documentDate': new Date(2015, 4, 11, 0, 0, 0, 0)
});
rpm002.save(function(err){
    if (err) console.log(err);
});
*/
/*
// find each person with a last name matching 'Ghost'
var query = Rpm.findOne({ 'episode': '1',  'documentDate': { '$gte' : new Date("2015-05-01T00:00:00Z"),'$lt' : new Date("2015-05-30T00:00:00Z")  }});

// selecting the `name` and `occupation` fields
query.select('documentDate');

// execute the query at a later time

query.exec(function (err, rpm) {
    if (err) return handleError(err);
    if (rpm === undefined || rpm === null) {
        return;
    }
    //console.log(rpm.documentDate)
})


var queryRPM = Rpm.findOne({ 'episode': '1',  'documentDate': { '$gte' : new Date("2015-05-01 00:00:00"),'$lt' : new Date("2015-05-02 00:00:00")  }}, '',function (err, rpms) {
    if (err) return handleError(err);
    if (rpms === undefined || rpms === null) {
        console.log("Nothing found in query");
        return;
    }
    //console.log("FIND ONE Results");
    //console.log(rpms);
});



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
            var document = JSON.parse(JSON.stringify(rpms[result]));
            for (var daily in document.dailyMeasurements) {
                ;
                var dayRecord = document.dailyMeasurements[daily];
                var dataDay = new Date(dayRecord.date);
                if ((dataDay >= requestStartDate) && (dataDay <= requestEndDate)) {
                    //console.log('Accepted: ' + dataDay);
                    dayRecord._documentId = document._id;
                    dayRecord._client = document._client;
 console.log("Nothing found in query");
 return;
 }
 // printResults
 //rpmutils.prettyPrint(rpms, {type: 'document', indent: ''});

 // Now we to build an array of results
 var results = [];
 for (var result in rpms) {
                    dayRecord.episode = document.episode;
                    dayRecord.documentDate = document.documentDate;
                    results.push(dayRecord);
                }
            }
        }
        console.log(JSON.stringify(results));
        //rpmutils.prettyPrint(results, {type: 'results', indent: ''});
        return (JSON.stringify(results));
    })

*/