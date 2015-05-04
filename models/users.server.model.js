/**
 * Created by griz on 5/1/2015.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


require('./enums.model');
require('./helpers.model');



var UserSchema = new Schema({
    firstName: {type: String, required: true},
    middleName: {type: String, required: false},
    lastName: {type: String, required: true}
});

mongoose.model('User',UserSchema);