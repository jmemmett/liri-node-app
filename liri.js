var axios = require("axios");
var something = require("dotenv").config();
var bandsintown = require('bandsintown')("liri");
var moment = require("moment");
// moment().format("DD/MM/YYYY"); <-- used when logging entries to the 
// var Spotify = require('node-spotify-api');
var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

// Variable for query entered by the user
var userOption = process.argv[2];
var userSubject = process.argv.slice(3).join(" ");

switch(userOption) {
    // case "concert-this": // Bands in Town API
    //     var url = "https://rest.bandsintown.com/artists/";
    //     var key = "/events?app_id=codingbootcamp";
    //     var queryURL = url + userSubject + key;
        
    //     // Run the axios.get function...
    //     // The axios.get function takes in a URL and returns a promise (just like $.ajax)
    //     axios.get(queryURL).then
    //         (function(events) {
    //             console.log(JSON.stringify(events.data, null, 2));
    //         },
    //         function(error) {
    //             if (error) {
    //                 console.log(error);
    //             }
    //         });

    //     console.log(`concert-this: bands in town API`);
    //     console.log(`Name of the Venue`);
    //     console.log(`Venue Location`);
    //     console.log(`Date of the Event`); // use moment.js to get format MM/DD/YYYY
    //     break;
    // case "spotify-this":
    //     console.log(`spotify-this: spotify API`);
    //     console.log(`Artist`);
    //     console.log(`The song's name`);
    //     console.log(`A preview link of the song from Spotify`);
    //     console.log(`The album that the song is from`);
    //     break;
    case "movie-this":
        axios.get("http://www.omdbapi.com/?t=" + userSubject + "&y=&plot=short&apikey=trilogy")
        .then(function(response) {
            console.log(`Movie Title: ${response.data.Title}`);
            console.log(`Release Year: ${response.data.Year}`);
            console.log(`IMDB Rating: ${response.data.imdbRating}`);
            console.log(`Rotten Tomatoes Rating: ${response.data.Ratings[1].Value}`);
            console.log(`Country where the movie was produced: ${response.data.Country}`);
            console.log(`Movie Language: ${response.data.Language}`);
            console.log(`Plot: ${response.data.Plot}`);
            console.log(`Actors in the movie: ${response.data.Actors}`);
            // for (var i = 0; i < ${response.data.Actors.length}; i++) {
            //     console.log(`${response.data.Actors[i]}`);
            // }}
            
        })
        .catch(function(error) {
            console.log(error);
        })
        
        break;
    case "do-what-it-says":
        console.log(`You selected do-what-it-says functionality`)
        // no further input required from the user
        // use the information in the random.txt file to do what it says
        break;
    default:
        console.log(`Defatult hit`);
}
