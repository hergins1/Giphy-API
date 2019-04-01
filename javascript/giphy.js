var teams = [];

function renderButtons() {

    $("#buttons-view").empty();
    $("#team-input").empty();

    for (var i = 0; i < teams.length; i++) {

        var newButton = $("<button>");

        newButton.addClass("team");
        newButton.attr("data-name", teams[i]);
        newButton.text(teams[i]);

        $("#buttons-view").append(newButton);
    }
}

$("#new-team").on("click", function (event) {

    event.preventDefault();

    var team = $("#team-input").val().trim();

    teams.push(team);
    console.log(team);

    renderButtons();

    $("button").on("click", function () {
        var getGiphy = $(this).attr("data-name");

        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=FEGmMdbgPZ6sVpLowC6U4HGt5wik5OEc&q=" + getGiphy + "&limit=10&offset=&rating=PG&lang=en";

        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (response) {
                console.log(response);
                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var teamDiv = $("<div>");
                    var rating = $("<p>").text("Rating: " + results[i].rating);
                    var teamImage = $("<img>");
                    teamImage.addClass("gif");
                    teamImage.attr("src", results[i].images.fixed_width_still.url);
                    teamDiv.append(rating);
                    teamDiv.append(teamImage);

                    $("#images-here").prepend(teamDiv);
                }
                
                // var still = results[i].images.fixed_width_still;
                // var animated = results[i].images.fixed_height.url;
                // $(".gif").on("click", function(){
            })
    }
    );

});


})

renderButtons();
