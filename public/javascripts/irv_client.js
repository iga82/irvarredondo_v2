$(document).ready(function() {
    Parse.initialize("khs9Kotg2tI6PFaKNpCV1GyIdYBrBBASppPre0mP", "gbmQ0UugkjEUU7rVSFCM0lJP4LPCIKwq6HlvTOCN");
    var query = new Parse.Query("Score");
    query.find({
        success: function(results) {
            // TODO what if there's no game in session
            // if no game display no game message in seesion
            if(results.length === 0){
                $("#player-info").hide();
                $("#no-game-in-session").show();
            }
            else{
                // get the Score object
                var object = results[0];
                
                // update the headers with the correct score
                var player1_score = object.get("player_1_score");
                var player2_score = object.get("player_2_score");
                var player1 = object.get("player_1");
                var player2 = object.get("player_2");
                $("#player-1-score").text(player1_score);
                $("#player-2-score").text(player2_score);
                $("#player-1-name").text(player1);
                $("#player-2-name").text(player2);
            }
        },

        error: function(error) {
            console.log("Could not find class.")
        }
    });



    $("#newGame").click(function(){
        // check if there is already a game session
        var query = new Parse.Query("Score");
        query.find({
            success: function(results) {
                if(results.length === 0){
                    $("#player-info").hide();
                    $("#no-game-in-session").hide();
                    $("#new-game-create-form").show();
                }
                else{
                    alert("Game already in session");
                }
            },
            error: function(error) {
                console.log("An error occurred.");
            }
        });
    });

    $("#game-create-submit").click(function(){
        // create new game object
        var Score = Parse.Object.extend("Score");
        var score = new Score();

        // save player1 name row
        var player_1_name = $("#player-1-name-create").val();
        var player_2_name = $("#player-2-name-create").val();
        var game_type = $("#game-type-create").val();
        // save the score object
        score.save({
            player_1 : player_1_name,
            player_2 : player_2_name,
            player_1_score : 0,
            player_2_score : 0,
            game : game_type
        });

        // create universal user to use as password
        var password = $("#password-create").val();
        var user = new Parse.User();
        user.set("username", player_1_name);
        user.set("password", password);
        user.set("email", "email@example.com");

        user.signUp(null, {
            success: function(user) {
                // Hooray! Let them use the app now.
            },
            error: function(user, error) {
                // Show the error message somewhere and let the user try again.
                alert("Error: " + error.code + " " + error.message);
            }
        });

        // show player info and hide new game create
        $("#new-game-create-form").hide();
        $("#player-info").show();
        alert("New Game Created");
        console.log("Created new game");

    });

    $("#player-1-button").click(function(){
        var pass_value = $("#password").val();
        if(pass_value !== "hello"){
            alert("wrong password");
            return;
        }
        var query = new Parse.Query("Score");
        query.find({
            success: function(results) {
            // get the Score object
            var object = results[0];
            // update the headers with the correct score
            var player_score = object.get("player_1_score");
            $("#player-1-score").text(player_score + 1);
            object.increment("player_1_score", 1);
            object.save();
            },

            error: function(error) {
                console.log("Could not find class.")
            }
        });
    });

    $("#player-2-button").click(function(){
        var pass_value = $("#password").val();
        if(pass_value !== "hello"){
            alert("wrong password");
            return;
        }
        var query = new Parse.Query("Score");
        query.find({
            success: function(results) {
            // get the Score object
            var object = results[0];
            // update the headers with the correct score
            var player_score = object.get("player_2_score");
            $("#player-2-score").text(player_score + 1);
            object.increment("player_2_score", 1);
            object.save();
            },
            error: function(error) {
                console.log("Could not find class.")
            }
        });
    });
});