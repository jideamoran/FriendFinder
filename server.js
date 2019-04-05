// Dependencies

var express = require("express");

// exp configuration

var app = express();

// sets an initial port
var PORT = process.env.PORT || 3600;

// sets up express app for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// // Router
// points our server to route files listed
// routes give our server a map of how to respond when users visit/request URLs

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});