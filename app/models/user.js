// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId
// define the schema for our user model
var userSchema = mongoose.Schema({


    local            : {
        email        : String,
        password     : String,
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

});


// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);


// var campaignSchema = new mongoose.Schema({
//          name: { type: String, trim:true },
//          goal: { type: Number, max:10 },
//          reason: { type: String, trim:true },
//          details: { type: String, trim:true },
//          image: { type: String },
//          video: { type: String, trim:true  },
//          created: { type: Date, default: Date.now },
//          createdby: {
//             type: Schema.ObjectId,
//             ref: 'User'
//         }
// });


// module.exports = mongoose.model('Campaign', campaignSchema);



// var campaignSchema = new mongoose.Schema({
//          description: { type: String, trim:true },
//          goal: { type: Number, max:10 },
//          summary: { type: String, trim:true },
//          entryID: { type: String, trim:true },
//          image: { type: Date },
//          link: { type: String, trim:true  },
//          feedID: { type: mongoose.Schema.Types.ObjectId },
//          state: { type: String, trim:true, lowercase:true, default: 'new' },
//          created: { type: Date, default: Date.now },
//      },
//      { collection: 'feedEntry' }
// );

// var campaign = mongoose.Schema({

// details     :String, 
// goal        :String,
// image       :String,
// name        :String
// reason      :String
// video       :String
// }