$(document).ready(function(){
  console.log("READY, PLAYER ONE?");
  
  var settings = {
  "url": "https://api.spotify.com/v1/artists/2O8wUq3dZLFKCwylQnLo0g",
  "method": "GET",
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
});