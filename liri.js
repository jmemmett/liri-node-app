var axios = require("axios");
var something = require("dotenv").config();
var bandsintown = require('bandsintown')("liri");
var moment = require("moment");
// moment().format("DD/MM/YYYY"); <-- used when logging entries to the 
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

// Variable for query entered by the user
var userOption = process.argv[2];
var userSubject = process.argv[3];

switch(userOption) {
    case "concert-this": // Bands in Town API
        var url = "https://rest.bandsintown.com/artists/";
        var key = "/events?app_id=codingbootcamp";
        var queryURL = url + userSubject + key;
        
        // Run the axios.get function...
        // The axios.get function takes in a URL and returns a promise (just like $.ajax)
        axios.get(queryURL).then
            (function(events) {
                console.log(JSON.stringify(events.data, null, 2));
            },
            function(error) {
                if (error) {
                    console.log(error);
                }
            });

        console.log(`concert-this: bands in town API`);
        console.log(`Name of the Venue`);
        console.log(`Venue Location`);
        console.log(`Date of the Event`); // use moment.js to get format MM/DD/YYYY
        break;
    case "spotify-this":
        console.log(`spotify-this: spotify API`);
        console.log(`Artist`);
        console.log(`The song's name`);
        console.log(`A preview link of the song from Spotify`);
        console.log(`The album that the song is from`);
        break;
    case "movie-this":
        console.log(`movie-this: OMDB API`);
        console.log(`* Title of the movie`);
        console.log(`* Year the movie came out`);
        console.log(`* IMDB Rating of the movie`);
        console.log(`* Rotten Tomatoes Rating of the movie`);
        console.log(`* Country where the movie was produced`);
        console.log(`* Language of the movie`);
        console.log(`* Plot of the movie`);
        console.log(`* Actors in the movie`);
        break;
    case "do-what-it-says":
        console.log(`You selected do-what-it-says functionality`);
        // no further input required from the user
        // use the information in the random.txt file to do what it says
        break;
    default:
        console.log(`Defatult hit`);
}
