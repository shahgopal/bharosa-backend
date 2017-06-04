var path = require("path");
module.exports = {

  // show the home page
  showHome: function(req, res) {
    res.sendFile(path.join(__dirname, '/../../views/index.html'));
  }

};