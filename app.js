
  var req = new XMLHttpRequest(); //create request

  req.open('GET', 'https://ghibliapi.herokuapp.com/films', true); //using GET request on the URL endpoint to open a new connection

  req.onload = function () {
    //JSON data is accessed here
    var data  = JSON.parse(this.response); //to parse response and make DATA variable that has all the JSON as an ARRAY of JS OBJECTS.
    data.forEach(movie => {
      console.log(movie.title);
    })



}

req.send(); //the SEND request
