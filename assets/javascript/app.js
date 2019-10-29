// Let's start by making the topics array. We'll use chess pieces. But in order for the search to work property, I need to call each one of them something the giphy API will recognize, so I need to use a space and the word chess first. 

var topics = [
    "chess pawn",
    "chess knight",
    "chess bishop",
    "chess rook",
    "chess queen",
    "chess king",
    "chess robot",
    "chess puzzle",
    "chess brain",
    "chess board",
]
function renderButtons() {
    $("#buttons-appear-here").empty();
    // Now we need a for loop displaying the buttons. 
    for (var i = 0; i < topics.length; i++) {
        // let's make a variable. 
        var chessButton = $("<button>");
        // adding class to buttons. 
        chessButton.addClass("gifButton");
        //    and make the text of the button the result of the topics for loop. 
        chessButton.text(topics[i]);
        //    and let's console log to make sure we're grabbing the correct item. 
        console.log(chessButton.text());

        // Need somewhere to place the buttons on the html. 

        $("#buttons-appear-here").append(chessButton);
    }
}
renderButtons();

$(document).on("click", ".submitButton", function () {

var submitButton = $("#inputSearch").val();
topics.push(submitButton);
console.log(submitButton);
renderButtons();
})

// But now we need the variable chess button to reach the onclick function. We can actually leave the "chessButton" variable outside of the onclick function, because we can simply have the text of the button equal the search function, so no need to include a global variable. 

//  Here we will place our button onclick function. We want the function to apply to all buttons, as we won't know the name of each button until it is clicked. 
$(document).on("click", ".gifButton", function () {

    // We'll grab the text of each button, and use it as our search text.
    var chessPiece = $(this).text();
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=txD0Y9Jo1FXC5y3vOVIvR7ttQ7q8CyKi&q=" + chessPiece + "&limit=10&offset=0x&lang=en";

    // so we're grabbing the giphy search URL + the APIkey and then placing "chessPiece" into the search box. Then we add the 
    console.log(chessPiece);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        //    No we can run the AJAX query. 

        console.log(response);

        //  Now we need a results variable. We will use the typical approach. 
        var results = response.data;
        // ========================

        for (var i = 0; i < results.length; i++) {

            // Now we run a loop to grab the results and apply them to a variable. 

            // and we'll create a div to put those results in. 
            var chessDiv = $("<div>");
            console.log(chessDiv);

            //And the rating results will go inside a paragraph, which will connect to the div. 
            var p = $("<p>");
            // so let's grab the rating from the giphy API
            p.text(results[i].rating);
            // and prepend that to the giphy image we will make below. 
            p.prepend("Rating: ");

            // Now we need to grab the image. 
            var chessImage = $("<img>");
            // And we'll set the source to the fixed height url on. We may need to change this to still and then fix it later with on clicks. 
            chessImage.attr("src", results[i].images.fixed_height.url);
            // Then we will add the ratings text to the image. 
            chessDiv.append(p);
            chessDiv.append(chessImage);
            // And we will push all of that into a prepend of the div that we listed in our html. 
            $("#gifs-appear-here").prepend(chessDiv);

        }

    });
});
