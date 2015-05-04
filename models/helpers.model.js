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


var emailSchema = new Schema({
    email:    { type: String,  unique: true },
    type:     { type: String,  enum: enums.emailTypes },
    verified: { type: Boolean, default: false}
});

var phoneSchema = new Schema({
    subscriberNumber:        { type: String,  unique: true },
    type:                    { type: String,  enum: enums.phoneTypes },
    mobile:                  { type: Boolean, default: false},
    mobileCarrier:           { type: String }
});

exports.emailSchema = emailSchema;
exports.phoneSchema = phoneSchema;
module.exports.encrypt = encrypt;
module.exports.decrypt = decrypt;

