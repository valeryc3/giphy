// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){

    $('.gallery').empty();
    var searchTerm = $('#search-term').val();
    var url = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&rating=pg&api_key=dc6zaTOxFJmzC";
    
    $.ajax({
        url: url,
        method: "GET",
        success: function(response){
            var gif =response.data[0] 
            // gif.embed_url
            // console.log(gif);
      $('body').append("<img src="+ gif.images.original.url + ">");
        },
    }); 
});


