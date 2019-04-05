// dependencies - path to correct file in our html

var path = require("path");

// routing

module.exports = function(app) {

    // html get requests

app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"))
});
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"))
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

};