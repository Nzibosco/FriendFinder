var friendsList = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsList);
  });
  app.post("/api/friends", function(req, res){

      var bestMatch = {
        name: "",
        photo: "",
        friendDifference: 500
    };

    // grab the result of the user's survey POST and parse it
    var userInput = req.body;
    var userScores = userInput.scores;

    // The variable to use to calculate the difference b/n the user's scores and the scores of friends wee already have in the database
    var totalDifference = 0;

    //loop through the friends data array of objects to get each friends scores
    for (var i = 0; i < friendsList.length - 1; i++) {
        totalDifference = 0;

        //loop through the friend[i] score and the user score and calculate the absolute difference between the two and push results to the total difference var
        for (var j = 0; j < 10; j++) {
            // diff between the scores and sum them into the totalDifference
            totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsList[i].scores[j]));
            // If the sum of differences is less than the difference of the current best match
            if (totalDifference <= bestMatch.friendDifference) {

                // Reset the bestMatch in accordance to the data above. 
                bestMatch.name = friendsList[i].name;
                bestMatch.photo = friendsList[i].photo;
                bestMatch.friendDifference = totalDifference;
            }
        }
    }

    // save user's data to the database (friends.js file in our case)
    friendsList.push(userInput);

    //respond with a json object of bestMatch that will be linked with our html file to fill the modal of best match.  
    res.json(bestMatch);
});
};