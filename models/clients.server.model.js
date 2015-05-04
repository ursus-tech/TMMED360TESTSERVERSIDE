/**
 * Created by griz on 4/30/2015.
 */


var mongoose = require('mongoose'),
    Schema = mongoose.Schema;




var createdModifiedPlugin = require('mongoose-createdmodified').createdModifiedPlugin;


var enums = require('./enums.model');
var helpers = require('./helpers.model');





var ClientSchema = new Schema({
    firstName:          { type: String, required: true},
    middleName:         { type: String, required: false},
    lastName:           { type: String, required: true},
    dob:                Date,
    ssn:                {type: String, get: helpers.decrypt, set: helpers.encrypt},
    emailAddresses:     [helpers.emailSchema],
    phoneNumbers:       [helpers.phoneSchema],
    height:             { type: Number },
    weight:             { type: Number },
    clientIdentifier:   { type: String },
    language:           { type: String, enum: enums.languageTypes },
    gender:             { type: String, enum: enums.genderTypes},
    coMorbidConditions: [{ type: String, enum: enums.coMorbidConditionTypes}]

    //createdOn:      { type: Date,   default:  Date.now},
    //createdBy:      { type: Schema.Types.ObjectId, ref: 'User'},
    //modifiedOn:     Date,
    //modifiedBy:     { type: Schema.Types.ObjectId, ref: 'User'}

});
ClientSchema.virtual('BMI').get(function() {
    if ((this.height > 0) && (this.weight > 0)) {
        return (703 * this.weight) / (this.height*this.height);
    }
    else {
        return "";
    }
});

ClientSchema.pre('save', function(next) {
    if (!(typeof this.phoneNumbers === 'undefined')) {
        this.phoneNumbers.forEach( function (arrayItem)
        {
            console.log(arrayItem.mobile);
            if (( arrayItem.mobile == true) && (typeof arrayItem.mobileCarrier === 'undefined')) {
                return next(new Error("Mobile Carrier is required if a mobile number."));
            };
        });
    };
    next();
});

ClientSchema.set('toJSON', {getters: true});
ClientSchema.plugin(createdModifiedPlugin, {index: true});
var ClientModel = mongoose.model("Client", ClientSchema);




require('./clients.test.model.js');

//mongoose.model('Client',ClientSchema);
