// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '277670635984811', // your App ID
        'clientSecret'  : 'c4371a1a11f965b85c1b47f3519c3fea', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback',
         'profileFields': ["emails", "displayName", "name"]
         
    },

    'twitterAuth' : {
        'consumerKey'       : 'uo5a0tetF8lCurxNmmyZS3IxA',
        'consumerSecret'    : 'hP0o4UDeJaNO2LUuZlyuwWTi89bhCVBbnpyxpXvmoJVF2QMMeX',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};