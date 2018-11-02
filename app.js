
  var req = new XMLHttpRequest(); //create request

  req.open('GET', 'https://ghibliapi.herokuapp.com/films', true); //using GET request on the URL endpoint to open a new connection

  req.onload = function () {
    //JSON data is accessed here
  }
}

req.send(); //the SEND request
