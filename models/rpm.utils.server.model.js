/**
 * Created by griz on 5/22/2015.
 */
'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var moment = require('moment');

// Load the 'Client' Mongoose model
var Rpm = require('mongoose').model('Rpm');






var prettyPrint = function(data, options) {


    function ppvital(vital) {
        if (vital.hasOwnProperty('_id')) {
            console.log('     _id:                    ' + vital._id);
        }
        if (vital.hasOwnProperty('date')) {
            console.log('      time:                  ' + moment(vital.date).format('hh:mm'));
        }
        if (vital.hasOwnProperty('temperature')) {
            console.log('      temperature:           ' + vital.temperature);
        }
        if (vital.hasOwnProperty('bpSystolic')) {
            console.log('      bpSystolic:            ' + vital.bpSystolic);
        }
        if (vital.hasOwnProperty('bpDiastolic')) {
            console.log('      bpDiastolic:           ' + vital.bpDiastolic);
        }
        if (vital.hasOwnProperty('meanArterialPressure')) {
            console.log('      meanArterialPressure:  ' + vital.meanArterialPressure);
        }
        if (vital.hasOwnProperty('pulseRate')) {
            console.log('      pulseRate:             ' + vital.pulseRate);
        }
        if (vital.hasOwnProperty('pulsePattern')) {
            console.log('      pulsePattern:          ' + vital.pulsePattern);
        }

    }

    function ppcopd(copd) {
        if (copd.hasOwnProperty('_id')) {
            console.log('      _id:                   ' + copd._id);
        }
        if (copd.hasOwnProperty('date')) {
            console.log('      time:                  ' + moment(copd.date).format('hh:mm'));
        }
        if (copd.hasOwnProperty('respirationRate')) {
            console.log('      respirationRate:       ' + copd.respirationRate);
        }
        if (copd.hasOwnProperty('pef')) {
            console.log('     pef:                   ' + copd.pef);
        }
        if (copd.hasOwnProperty('fev1')) {
            console.log('      fev1:                  ' + copd.fev1);
        }
        if (copd.hasOwnProperty('fev1Pred')) {
            console.log('      fev1Pred:              ' + copd.fev1Pred);
        }
        if (copd.hasOwnProperty('o2Sat')) {
            console.log('      o2Sat:                 ' + copd.o2Sat);
        }
    }


    function ppbody(body) {
        if (body.hasOwnProperty('_id')) {
            console.log('      _id:                   ' + body._id);
        }
        if (body.hasOwnProperty('date')) {
            console.log('      time:                  ' + moment(body.date).format('hh:mm'));
        }
        if (body.hasOwnProperty('height')) {
            console.log('      height:                ' + body.height);
        }
        if (body.hasOwnProperty('weight')) {
            console.log('      weight:                ' + body.weight);
        }
    }

    function ppdiabetes(diabetes) {
        if (diabetes.hasOwnProperty('_id')) {
            console.log('      _id:                   ' + diabetes._id);
        }
        if (diabetes.hasOwnProperty('date')) {
            console.log('      time:                  ' + moment(diabetes.date).format('hh:mm'));
        }
        if (diabetes.hasOwnProperty('glyco')) {
            console.log('      glyco:                 ' + diabetes.glyco);
        }
        if (diabetes.hasOwnProperty('glucometer')) {
            console.log('      glucometer:            ' + diabetes.glucometer);
        }
    }

    function ppchf(chf) {
        if (chf.hasOwnProperty('_id')) {
            console.log('       _id:                  ' + chf._id);
        }
        if (chf.hasOwnProperty('date')) {
            console.log('      time:                  ' + moment(chf.date).format('hh:mm'));
        }
        if (chf.hasOwnProperty('ankleEdemaRt')) {
            console.log('      ankleEdemaRt:          ' + chf.ankleEdemaRt);
        }
        if (chf.hasOwnProperty('ankleEdemaLt')) {
            console.log('      ankleEdemaLt:          ' + chf.ankleEdemaLt);
        }
        if (chf.hasOwnProperty('pedalEdemRt')) {
            console.log('      pedalEdemRt:           ' + chf.pedalEdemRt);
        }
        if (chf.hasOwnProperty('pedalEdemaLt')) {
            console.log('      pedalEdemaLt:          ' + chf.pedalEdemaLt);
        }
        if (chf.hasOwnProperty('pretibialEdemRt')) {
            console.log('      pretibialEdemRt:       ' + chf.pretibialEdemRt);
        }
        if (chf.hasOwnProperty('pretibialEdemaLt')) {
            console.log('      pretibialEdemaLt:      ' + chf.pretibialEdemaLt);
        }
        if (chf.hasOwnProperty('dyspneaAssessment')) {
            console.log('      dyspneaAssessment:     ' + chf.dyspneaAssessment);
        }
        if (chf.hasOwnProperty('vasMethod')) {
            console.log('      vasMethod:             ' + chf.vasMethod);
        }
        if (chf.hasOwnProperty('likertMethod')) {
            console.log('      likertMethod:          ' + chf.likertMethod);
        }
    }


    function ppdaily(daily) {
        console.log('    _id:                     ' + daily._id);
        console.log('    day:                     ' + moment(daily.date).format('MM-DD-YYYY'));
        prettyPrint(daily.vitalMeasurements, {type: 'vital'});
        prettyPrint(daily.copdMeasurements, {type: 'copd'});
        prettyPrint(daily.diabetesMeasurements, {type: 'diabetes'});
        prettyPrint(daily.bodyMeasurements, {type: 'body'});
        prettyPrint(daily.chfMeasurements, {type: 'chf'});
    }

    function ppdocument(document) {
        console.log('  _id:                       ' + document._id);
        console.log('  episode:                   ' + document.episode);
        console.log('  _client:                   ' + document._client);
        console.log('  documentDay:               ' + moment(document.documentDate).format('MM-DD-YYYY'));
        prettyPrint(document.dailyMeasurements, {type: 'daily', indent: '  '});
    }

    function ppresults(results) {
        console.log('  _documentId:               ' + results._documentId);
        console.log('  documentDay:               ' + moment(results.documentDate).format('MM-DD-YYYY'));
        console.log('  episode:                   ' + results.episode);
        console.log('  _client:                   ' + results._client);
        console.log('  _id:                       ' + results._id);
        console.log('  day:                       ' + moment(results.date).format('MM-DD-YYYY'));
        prettyPrint(results.vitalMeasurements, {type: 'vital', indent: '  '});
        prettyPrint(results.copdMeasurements, {type: 'copd', indent: '  '});
        prettyPrint(results.diabetesMeasurements, {type: 'diabetes', indent: '  '});
        prettyPrint(results.bodyMeasurements, {type: 'body', indent: '  '});
        prettyPrint(results.chfMeasurements, {type: 'chf', indent: '  '});
    }

    function printFree (object) {
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                console.log(key + ':   ' + object[key]);
            }
        }
    }



    var printFixed = {};
    printFixed.chf = ppchf;
    printFixed.body = ppbody;
    printFixed.diabetes = ppdiabetes;
    printFixed.copd = ppcopd;
    printFixed.vital = ppvital;
    printFixed.daily = ppdaily;
    printFixed.document = ppdocument;
    printFixed.results = ppresults;

    if (data == undefined) {
        return 'undefined';
    }
    if (data === null) {
        return 'null';
    }



    var headingIndent;
    if (options == undefined || options == null || (!options.hasOwnProperty('indent')))  {
        headingIndent = '    ';
    } else {
        headingIndent = options.indent;
    }

    var type;
    if (options == undefined || options == null || (!options.hasOwnProperty('type')))  {
        type = 'free';
    } else {
        type = options.type;
    }

    var heading;
    switch (type) {
        case 'dump':
            console.log(data);
            break;

        case 'chf':
        case 'body':
        case 'diabetes':
        case 'copd':
        case 'vital':
        case 'daily':
        case 'document':
        case 'results':
            var pp = printFree;
            for (var key in printFixed) {
               if (key == type) {
                   pp = printFixed[key];
                   heading = key.toUpperCase();
                   break;
                }
            };
            switch (Object.prototype.toString.call(data)) {
                case '[object Array]':
                    for (var reading in data) {
                        console.log(headingIndent + heading +':[' + reading +']');
                        pp(data[reading]);
                    }
                    break;

                case '[object Object]':
                    console.log(headingIndent + heading +':');
                    pp(data);
                    break;

                default:
                    console.log('Invalid Measurement Variable.');
            };
            break;

        case 'free':
        default:
            switch (Object.prototype.toString.call(data)) {
                case '[object Array]':
                    for (var reading in data) {
                        console.log('  ' + heading +':[' + reading +']');
                        printFree(data[reading]);
                    }
                    break;

                case '[object Object]':
                    console.log(headingIndet + heading +':');
                    printFree(data);
                    break;

                default:
                    console.log('Invalid Measurement Variable.');
            };
            break;
    }
};

module.exports.prettyPrint = prettyPrint;