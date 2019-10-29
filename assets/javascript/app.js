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







//  Let's start with the typical approach to the ajax get method. We will create multiple buttons 


$("Button").on("click", function () {
    var chessPiece = $(this).attr("data-chess");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=txD0Y9Jo1FXC5y3vOVIvR7ttQ7q8CyKi&q=" + chessPiece + "&limit=10&offset=0x&lang=en";

    console.log(chessPiece);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
        // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.

        console.log(response);

        // Step 2: since the image information is inside of the data key,
        // make a variable named results and set it equal to response.data

        // =============== put step 2 in between these dashes ==================
        var results = response.data;
        // ========================

        for (var i = 0; i < results.length; i++) {

            // Step 3: uncomment the for loop above and the closing curly bracket below.
            // Make a div with jQuery and store it in a variable named animalDiv.
            var chessDiv = $("<div>");
            console.log(chessDiv);

            // var rating = results[i].rating;
            // Make a paragraph tag with jQuery and store it in a variable named p.
            var p = $("<p>");
            p.text(results[i].rating);
            p.prepend("Rating: ");

            // Set the inner text of the paragraph to the rating of the image in results[i].
            // Make an image tag with jQuery and store it in a variable named animalImage.
            var chessImage = $("<img>");
            // Set the image's src to results[i]'s fixed_height.url.
            chessImage.attr("src", results[i].images.fixed_height.url);
            // Append the p variable to the animalDiv variable.
            chessDiv.append(p);
            // Append the animalImage variable to the animalDiv variable.
            chessDiv.append(chessImage);
            // Prepend the animalDiv variable to the element with an id of gifs-appear-here.
            $("#gifs-appear-here").prepend(chessDiv);

            // ============= put step 3 in between these dashes ======================

            // ==================================
        }

    });
});
