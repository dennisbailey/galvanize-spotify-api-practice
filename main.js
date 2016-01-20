$(document).ready(function(){
  console.log("READY, PLAYER ONE?");
  
  var settings = {
  "url": "https://api.spotify.com/v1/artists/2O8wUq3dZLFKCwylQnLo0g/albums",
  "method": "GET",
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    
    var albumArray = response.items;
    albumArray.forEach(function(obj) {
      $('#target').append('<li>'+obj.name+'</li>');
    });  
  }); 
});