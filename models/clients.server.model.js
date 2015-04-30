/**
 * Created by griz on 4/30/2015.
 */


var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ClientSchema = new Schema({
        firstName: String,
        middleName: String,
        lastName: String


});

mongoose.model('Client',ClientSchema);