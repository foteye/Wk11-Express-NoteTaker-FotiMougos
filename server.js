var express = require("express");
var nodeapp = express();

var PORT = process.env.PORT || 8080;

nodeapp.use(express.urlencoded({ extended: true }));
nodeapp.use(express.json());
nodeapp.use(express.static("public"));

require("./routes/apiRoutes")(nodeapp);
require("./routes/htmlRoutes")(nodeapp);

nodeapp.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});