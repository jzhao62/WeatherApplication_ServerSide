var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyDIdbrirI6DL4bNnn4UNVyKDxFYHj8hWVE'
});

const https = require('https');
const request = require('request')
var jso;



/**
 * return directions coordinates
 * @param start coordinate
 * @param end coordinate
 * @param callback
 */
exports.retrieve_dir = function retrieve_direction(start, end, callback){
    var post = [];
    googleMapsClient.directions(
        {origin: start, destination : end},
        function(err, response) {
            if (!err) {
                jso = response.json['routes'][0]['legs'][0]['steps'];
                for(i = 0; i < jso.length; i++){
                    // console.log(jso[i]['start_location'])
                    post.push(jso[i]['start_location'])
                }
                console.log("directions retrieved from API")
                callback(post);

            }
        });
}

/**
 * return place coordinate
 * @param place
 * @param callback
 */


exports.retrieve_geo = function retrieve_geo(place, callback){
    var post;
    googleMapsClient.geocode(
        {address: place},

        function(err, response) {
            if (!err) {
                this.lat = response['json']['results'][0]['geometry']['location']['lat'];
                this.lng = response['json']['results'][0]['geometry']['location']['lng'];
                post = [lat, lng]
            }
            callback(err, post);
        });



}

/**
 * given lat, lon, return target's weather
 * @param lat
 * @param lon
 * @param callback
 */

exports.retrieve_weather = function retrieve_weather(lat, lon, callback){
    var a = 'https://api.openweathermap.org/data/2.5/weather?';
    var b = 'lat=' + lat;
    var c = '&lon=' + lon;
    var d = '&appid=' + '14ad4eef49216407ad620a628ff060fd'

    var url = a + b + c + d;

    var post;

    request(url, function (error, response, body) {

        if(error){
            callback(error, null);
        }


        if (!error && response.statusCode == 200) {
            var ret = JSON.parse(body);
            post = [ret['name'], ret['weather'][0]];
            callback(null, post)
        }
    });


}













