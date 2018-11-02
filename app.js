
const app = document.getElementById('root'); //to access ROOT ELEMENT in index.html
const logo = document.createElement('img'); //created image/pic ELEMENT
logo.src = 'pic1.gif'; //set the SRC attribute
const container = document.createElement('div'); //Set CLASS Attr to the CONTAINER
container.setAttribute('class', 'container');

app.appendChild(logo); //to append pic/image/logo to app root
app.appendChild(container); //to append CONTAINER to app root

  var req = new XMLHttpRequest(); //create request

  req.open('GET', 'https://ghibliapi.herokuapp.com/films', true); //using GET request on the URL endpoint to open a new connection

  req.onload = function () {
    //JSON data is accessed here
    var data  = JSON.parse(this.response); //to parse response and make DATA variable that has all the JSON as an ARRAY of JS OBJECTS.
    //IF statment BELOW to have success for any status-code response between 200-300 and a NOT-FOUND log out code outside those ranges i.e. if incorrect URL is used/typed in.
    if (req.status >= 200 && req.status < 400) {
      data.forEach(movie => {
        // console.log(movie.title);
        const box = document.createElement('div'); //created div with BOX CLASS
        box.setAttribute('class', 'box');

        const h1 = document.createElement('h1'); //created h1 set to text content to the TITLE from data from website's/JSON data.
        h1.textContent = movie.title;

        const desc = document.createElement('desc'); //created DESC and set textContent to the DESCRIPTION from data from website's/JSON data.
        movie.description = movie.description.substring(0, 150); //substring and 150 used here to limit description and keep all BOX sizes the same.
        desc.textContent = `${movie.description}...`;

        container.appendChild(box); //to append box to the container

      });
    } else {
      console.log('Sorry There is an Error');
    }
}

req.send(); //the SEND request
