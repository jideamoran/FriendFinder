// this should loud the data
var friends = require("../data/friends.js");

// Routing

module.exports = function(app) {

// should take user directly to survey quesitons

app.get("/api/friends", function(req,res) {
    res.json(tableQuestions)
});

app.post("/api/friends", function(req, res) {

    if (tableQuestions.length < 10) {
        tableQuestions.push(req.body);
        res.json(true);
    }
    else {
        console.log(err);
    }

})

}
