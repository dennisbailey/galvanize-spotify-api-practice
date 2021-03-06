$(document).ready(function(){
  console.log("READY, PLAYER ONE?");
  
  var settings = {
  "url": "https://api.spotify.com/v1/artists/2O8wUq3dZLFKCwylQnLo0g/albums",
  "method": "GET",
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    
    var albumArray = response.items;
    
    var albumNameArray = albumArray.map(function(obj) {
      return obj.name;
    });      
    
    var filteredArray = albumNameArray.filter(function(str){
      return str.search("Truth") === -1;
    });
      
    filteredArray.forEach(function(str){
      $('#target').append('<li>'+str+'</li>');
    });  
  }); 
});