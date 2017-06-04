var mongoose = require("mongoose"),
 Schema = mongoose.Schema,
 objectId = mongoose.Schema.ObjectId;
 
 var campaignSchema = new mongoose.Schema({
 name: { type: String, required: true },
 contactNo: { type: String, required: true },
 address: { type: String, required: true },
           createdby: {
             type: Schema.ObjectId,
             ref: 'User'
         }

}, {
 versionKey: false
});
 
module.exports = mongoose.model('Campaign', campaignSchema);

