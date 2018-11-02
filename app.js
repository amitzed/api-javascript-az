
const app = document.getElementById('root'); //to access ROOT ELEMENT in index.html
const logo = document.createElement('img'); //created image/pic ELEMENT
logo.src = 'pic1.gif'; //set the SRC attribute
const container = document.createElement('div'); //Set CLASS Attr to the CONTAINER
container.setAttribute('class', 'container');

app.appendChild(logo); //to append pic/image/logo to app root
app.appendChild(container); //to append CONTAINER to app root

  var req = new XMLHttpRequest(); //create request

  req.open('GET', 'https://api.spacexdata.com/v3/launches', true); //using GET request on the URL endpoint to open a new connection

  req.onload = function () {
    //JSON data is accessed here
    var data  = JSON.parse(this.response); //to parse response and make DATA variable that has all the JSON as an ARRAY of JS OBJECTS.
    //IF statment BELOW to have success for any status-code response between 200-300 and a NOT-FOUND log out code outside those ranges i.e. if incorrect URL is used/typed in.
    if (req.status >= 200 && req.status < 400) {
      data.forEach(spacex => {
        // console.log(spacex.mission_name);
        const box = document.createElement('div'); //created div with BOX CLASS
        box.setAttribute('class', 'box');

        const h1 = document.createElement('h1'); //created h1 set to text content to the TITLE from data from website's/JSON data.
        h1.textContent = spacex.mission_name;

        const desc = document.createElement('desc'); //created DESC and set textContent to the DESCRIPTION from data from website's/JSON data.
        spacex.launch_year = spacex.launch_year.substring(0, 150); //substring and 150 used here to limit description and keep all BOX sizes the same.
        desc.textContent = `${spacex.launch_year}...`;

        container.appendChild(box); //to append box to the container

        //For each Box, it will contain the H1 and DESC so below code is to append them to the BOX.
        box.appendChild(h1);
        box.appendChild(desc);

      });
    } else {
      // console.log('Sorry There is an Error');
      const err = document.createElement('errNotice');
      err.textContent = `Error`;
      app.appendChild(err);
    }
}

req.send(); //the SEND request
