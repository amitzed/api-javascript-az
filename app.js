
const app = document.getElementById('root');
const logo = document.createElement('img');
logo.src = 'pic1.gif';
const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

//   var req = new XMLHttpRequest(); //create request
//
//   req.open('GET', 'https://ghibliapi.herokuapp.com/films', true); //using GET request on the URL endpoint to open a new connection
//
//   req.onload = function () {
//     //JSON data is accessed here
//     var data  = JSON.parse(this.response); //to parse response and make DATA variable that has all the JSON as an ARRAY of JS OBJECTS.
//     //IF statment BELOW to have success for any status-code response between 200-300 and a NOT-FOUND log out code outside those ranges i.e. if incorrect URL is used/typed in.
//     if (req.status >= 200 && req.status < 400) {
//       data.forEach(movie => {
//         console.log(movie.title);
//       });
//     } else {
//       console.log('Sorry There is an Error');
//     }
// }
//
// req.send(); //the SEND request
