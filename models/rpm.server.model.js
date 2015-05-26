/**
 * Created by griz on 4/30/2015.
 */


var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var createdModifiedPlugin = require('mongoose-createdmodified').createdModifiedPlugin;

var enums = require('./enums.model');
var helpers = require('./helpers.model');

//mongoose.set('debug', true);

var RpmSchema = new Schema({
    '_id':                    Schema.ObjectId,
    'episode':                { type: Number },
    '_client':                { type: Schema.Types.ObjectId, ref: 'Client' },
    'documentDate':           { type: Date }, // Year, Month, Day forced to 1 or 15
    'dailyMeasurements':      [
        {
            date:                 { type: Date, index: true},
            vitalMeasurements:    [ helpers.vitalMeasurementsSchema    ],
            bodyMeasurements:     [ helpers.bodyMeasurementsSchema     ],
            copdMeasurements:     [ helpers.copdMeasurementsSchema     ],
            diabetesMeasurements: [ helpers.diabetesMeasurementsSchema ],
            chfMeasurements:      [ helpers.chfMeasurementsSchema      ]
        }
    ]
});

RpmSchema.index({ client: 1, episode: - 1, documentDate: -1 }, {unique: true});

/*
rpmSchema.virtual('BP').get(function() {
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
            if (( arrayItem.mobile == true) && (typeof arrayItem.mobileCarrier === 'undefined')) {
                return next(new Error("Mobile Carrier is required if a mobile number."));
            };
        });
    };
    next();
});

ClientSchema.set('toJSON', {getters: true});
*/
RpmSchema.plugin(createdModifiedPlugin, {index: true});
var RpmModel = mongoose.model("Rpm", RpmSchema);


/*
TempSchema = new Schema({
    salutationKey: {type: String, enum: ['Mr.', 'Mrs.', 'Ms.']},
    salutation: {type: String, enum: ['Mr.', 'Mrs.', 'Ms.']}
});

var Temp = mongoose.model('Temp', TempSchema);

console.log(Temp.schema.path('salutation').enumValues);
var temp = new Temp();
console.log(temp.schema.path('salutation').enumValues);
*/



require('./rpm.test.model.js');

//mongoose.model('Client',ClientSchema);
