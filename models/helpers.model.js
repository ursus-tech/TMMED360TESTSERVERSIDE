/**
 * Created by griz on 5/1/2015.
 */

// crypto code
var crypto = require('crypto');


var enums = require('./enums.model');


var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var encrypt = function(text){
    var cipher = crypto.createCipher('aes-256-cbc', process.env.SERVER_SECRET);
    var crypted = cipher.update(text,'utf8','hex');
    crypted += cipher.final('hex');
    return crypted;
}

var decrypt  = function(text){
    if (text === null || typeof text === 'undefined') {return text;};
    var decipher = crypto.createDecipher('aes-256-cbc', process.env.SERVER_SECRET);
    var dec = decipher.update(text,'hex','utf8');
    dec += decipher.final('utf8');
    return dec;
}




/*
var genderTypesDoc = new GenderTypes ({
    id: 'male',
    display: "Male"
});
genderTypesDoc.save(function(err){
    console.log(err);
});

var genderTypesDoc = new GenderTypes ({
    id: 'female',
    display: "Female"
});

genderTypesDoc.save(function(err){
    console.log(err);
});

*/

var emailSchema = new Schema({
    email:    { type: String,  unique: false },
    type:     { type: String,  enum: enums.emailTypes },
    verified: { type: Boolean, default: false}
});

var phoneSchema = new Schema({
    subscriberNumber:        { type: String,  unique: false },
    type:                    { type: String,  enum: enums.phoneTypes },
    mobile:                  { type: Boolean, default: false},
    mobileCarrier:           { type: String }
});

var episodeSchema = new Schema({
    episode:                { type: Number },
    rpm:                  [ { type: Schema.Types.ObjectId, ref: 'Rpm' } ]
});

var bodyMeasurementsSchema = new Schema({
    date:                   { type: Date },
    height:                 { type: Number }, // inches
    weight:                 { type: Number }  // lbs
});

var vitalMeasurementsSchema = new Schema({
    date:                   { type: Date },   //
    temperature:            { type: Number }, // DegF   (Farenheit)
    bpSystolic:             { type: Number }, // mmHg
    bpDiastolic:            { type: Number }, // mmHg
    meanArterialPressure:   { type: Number }, // mmHg
    pulseRate:              { type: Number }, // bpm
    pulsePattern:           { type: String,  enum: enums.pulsePatternTypes }
});

var copdMeasurementsSchema = new Schema({
    date:                   { type: Date },
    respirationRate:        { type: Number }, // br/min
    pef:                    { type: Number }, // L/min   (PEF)
    fev1:                   { type: Number }, // L       (FEV1)
    fev1Pred:               { type: Number }, // %       (FEV1%Pred)
    o2Sat:                  { type: Number }  // %       (O2Sat)
});

var diabetesMeasurementsSchema = new Schema({
    date:                   { type: Date },
    glyco:                  { type: Number }, // HbA1c (%)
    glucometer:             { type: Number }  // mg/dl
});

var chfMeasurementsSchema = new Schema({
    date:                   { type: Date },
    ankleEdemaRt:           { type: Number, min:  0, max:   4 }, //
    ankleEdemaLt:           { type: Number, min:  0, max:   4 }, //
    pedalEdemRt:            { type: Number, min:  0, max:   4 }, //
    pedalEdemaLt:           { type: Number, min:  0, max:   4 }, //
    pretibialEdemRt:        { type: Number, min:  0, max:   4 }, //
    pretibialEdemaLt:       { type: Number, min:  0, max:   4 }, //
    dyspneaAssessment:      { type: Number, min:  0, max:   4 }, //
    vasMethod:              { type: Number, min:  0, max: 100 }, //
    likertMethod:           { type: Number, min: -3, max:   3 }  //
});



exports.emailSchema = emailSchema;
exports.phoneSchema = phoneSchema;
exports.episodeSchema = episodeSchema;
exports.bodyMeasurementsSchema = bodyMeasurementsSchema;
exports.vitalMeasurementsSchema = vitalMeasurementsSchema;
exports.copdMeasurementsSchema = copdMeasurementsSchema;
exports.diabetesMeasurementsSchema = diabetesMeasurementsSchema;
exports.chfMeasurementsSchema = chfMeasurementsSchema;


module.exports.encrypt = encrypt;
module.exports.decrypt = decrypt;

