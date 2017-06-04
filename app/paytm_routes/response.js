var checksum = require('../models/paytm/checksum');
var config = require('../../config/paytm');
module.exports = function (app) {
	app.post('/response', function(req,res){
   console.log("in request post: ");
   console.log(req);
   console.log("in response post");
   console.log(res);
   var paramlist = req.body;
        var paramarray = new Array();
        console.log("Reponse paramlist");
        console.log(paramlist);
        if(checksum.verifychecksum(paramlist, config.PAYTM_MERCHANT_KEY))
        {
              
               console.log("true");
               res.render('response.ejs',{ 'restdata' : "true" ,'paramlist' : paramlist});
        }else
        {
           console.log("false");
          res.render('response.ejs',{ 'restdata' : "false" , 'paramlist' : paramlist});
        };
//vidisha
  });
};
