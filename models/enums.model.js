/**
 * Created by griz on 5/1/2015.
 */


var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


require('./enums.create.model.js');


/** GENDER TYPES  **/



var emailTypes = [
    'Work',
    'Personal',
    'Fax',
    'Home'
];

var phoneTypes = [
    'Work',
    'Personal',
    'Mobile',
    'Page',
    'Fax',
    'Home'
];

var languageTypes = [
    'Arabic',
    'Bengali',
    'Chinese',
    'English',
    'French',
    'German',
    'Greek',
    'Hindu',
    'Italian',
    'Japanese',
    'Latin',
    'Portuguese',
    'Russian',
    'Spanish'
];


var coMorbidConditionTypes = [
    'Asthmatic',
    'CAD',
    'Congestive Heart Failure',
    'COPD',
    'Diabetes',
    'Diabetes Type 1',
    'Diabetes Type 2',
    'Eval',
    'Gestatioanal Diabetes',
    'Heart Failure',
    'Hypertension',
    'Major Depressive Disorder',
    'None',
    'Other',
    'Pre Diabetes',
    'Respiratory Failure',
    'Trach',
    'Unspecified'
];

var pulsePatternTypes = [
    'Regular',
    'Irregular'
];


var phoneEmailAddress  = {
'3 River Wireless'             :     '@sms.3rivers.net',
'CS Wireless'                  :     '@paging.acswireless.com',
'Alltel'                       :     '@message.alltel.com',
'AT&T'                         :     '@txt.att.net',
'Bell Canada  '                :     '@txt.bellmobility.ca',
'Bell Canada-1'                :     '@bellmobility.ca',
'Bell Mobility'                :     '@txt.bellmobility.ca',
'Bell Mobility (Canada)'       :     '@txt.bell.ca',
'Blue Sky Frog'                :     '@blueskyfrog.com',
'Bluegrass Cellular'           :     '@sms.bluecell.com',
'Boost Mobile'                 :     '@myboostmobile.com',
'BPL Mobile'                   :     '@bplmobile.com',
'Carolina West Wireless'       :     '@cwwsms.com',
'Cellular One'                 :     '@mobile.celloneusa.com',
'Cellular South'               :     '@csouth1.com',
'Centennial Wireless'          :     '@cwemail.com',
'CenturyTel'                   :     '@messaging.centurytel.net',
'Cingular (Now AT&T)'          :     '@txt.att.net',
'Clearnet'                     :     '@msg.clearnet.com',
'Comcast'                      :     '@comcastpcs.textmsg.com',
'Corr Wireless Communications' :     '@corrwireless.net',
'Dobson'                       :     '@mobile.dobson.net',
'Edge Wireless'                :     '@sms.edgewireless.com',
'Fido'                         :     '@fido.ca',
'Golden Telecom'               :     '@sms.goldentele.com',
'Helio'                        :     '@messaging.sprintpcs.com',
'Houston Cellular'             :     '@text.houstoncellular.net',
'Idea Cellular'                :     '@ideacellular.net',
'Illinois Valley Cellular'     :     '@ivctext.com',
'Inland Cellular Telephone'    :     '@inlandlink.com',
'MCI'                          :     '@pagemci.com',
'Metro PCS'                    :     '@mymetropcs.com',
'Metrocall'                    :     '@page.metrocall.com',
'Metrocall 2-way'              :     '@my2way.com',
'Microcell'                    :     '@fido.ca',
'Midwest Wireless'             :     '@clearlydigital.com',
'Mobilcomm'                    :     '@mobilecomm.net',
'MTS'                          :     '@text.mtsmobility.com',
'Nextel'                       :     '@messaging.nextel.com',
'OnlineBeep'                   :     '@onlinebeep.net',
'PCS One'                      :     '@pcsone.net',
'Presidents Choice'            :     '@txt.bell.ca',
'Public Service Cellular'      :     '@sms.pscel.com',
'Qwest'                        :     '@qwestmp.com',
'Rogers AT&T Wireless'         :     '@pcs.rogers.com',
'Rogers Canada'                :     '@pcs.rogers.com',
'Satellink'                    :     '.pageme@satellink.net',
'Solo Mobile'                  :     '@txt.bell.ca',
'Southwestern Bell'            :     '@email.swbw.com',
'Sprint'                       :     '@messaging.sprintpcs.com',
'Sumcom'                       :     '@tms.suncom.com',
'Surewest Communicaitons'      :     '@mobile.surewest.com',
'Telus'                        :     '@msg.telus.com',
'T-Mobile'                     :     '@tmomail.net',
'Tracfone'                     :     '@txt.att.net',
'Triton'                       :     '@tms.suncom.com',
'Unicel'                       :     '@utext.com',
'US Cellular'                  :     '@email.uscc.net',
'US West'                      :     '@uswestdatamail.com',
'Verizon'                      :     '@vtext.com',
'Virgin Mobile'                :     '@vmobl.com',
'Virgin Mobile Canada'         :     '@vmobile.ca',
'West Central Wireless'        :     '@sms.wcc.net',
'Western Wireless'             :     '@cellularonewest.com',
'Undefined'                    :     ''
};
/*
for(var key in phoneEmailAddress) {
    console.log(key);
    //console.log("key " + key + " has value " + phoneEmailAddress[key]);
}
*/

exports.phoneEmailAddress;
exports.emailTypes = emailTypes;
exports.phoneTypes = phoneTypes;
exports.languageTypes = languageTypes;
exports.coMorbidConditionTypes = coMorbidConditionTypes;
exports.pulsePatternTypes = pulsePatternTypes;