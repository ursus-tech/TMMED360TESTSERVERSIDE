/**
 * Created by griz on 5/7/2015.
 */


var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/*************************************************************************************/
/*     GENDER TYPE ENUM CREATION [START]                                             */
/*************************************************************************************/
var genderTypeDefaults = [
    {  id: 'male',   display :"Male"  },
    {  id: 'female', display :"Female"}
];
var genderTypes = buildIdArray(genderTypeDefaults);


var GenderTypesSchema = new Schema({
    id: {type: String, enum: genderTypes, unique: true},
    display: {type: String, unique: true}
});


var GenderTypesModel = mongoose.model("GenderTypes", GenderTypesSchema);
var GenderTypes = require('mongoose').model('GenderTypes');
GenderTypes.create(genderTypeDefaults,function(err){
    //console.log(err);
});
/*************************************************************************************/
/*     GENDER TYPE CREATION [END]                                                    */
/*************************************************************************************/
/*
console.log("START GenderTypes");
function retrieveGenderTypes(callback) {
    GenderTypes.find({}, function(err, theGenderTypes) {
        if (err) {
            callback(err, null);
        } else {
            //console.log(theGenderTypes);
            callback(null, theGenderTypes);
        }
    });
};
var result = [];
retrieveGenderTypes(function(err, theGenderTypes) {
    if (err) {
        console.log(err);
    }
    //console.log(theGenderTypes);
    $scope.genderTypes = theGenderTypes.slice();
    console.log(result)
});

doStuff();

function doStuff()
{
    //do some things
    setTimeout(continueExecution, 1000) //wait ten seconds before continuing
}

function continueExecution()
{
    console.log("In timeout.");
    console.log(result)
    console.log("timeout over.");
}
;



console.log("END GenderTypes");



/*************************************************************************************/
/* FUNCTION:                                                                         */
/*      buildIdArray (typeDefaults)                                                  */
/* PARAMETERS:                                                                       */
/*      typeDefaults - Array of Objects used to create documents for enum Collection.*/
/*                     Must contain field :id                                        */
/* PURPOSE:                                                                          */
/*     FUNCTION TO MAKE ARRAY OF ID FIELDS USED TO ENFORCE ENUMS USED IN SCHEMA      */
/*************************************************************************************/
function buildIdArray (typeDefaults) {
    var types = new Array(typeDefaults.length);
    typeDefaults.forEach(function (TypeDefault) {
        var id = TypeDefault.id;
        types.push(id);
    });
    return types;
};

