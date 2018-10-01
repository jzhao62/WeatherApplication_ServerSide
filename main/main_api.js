var api = require('../model/apis.js');
var Record = require('../model/record.js')
var Records = require('../model/Record_api.js')
const start = 'Cermak & Morgan, Chicago, IL ';
const end = 'Universal Studios Hollywood'

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();


var one = today.toLocaleDateString("en-US", options)




exports.generate_coordinates = function(inputs, callback){

    console.log("OK")


    var coords = [];


    inputs.forEach(function(city){

        api.retrieve_geo(city, function(err, ret){

            if(err) console.log("err at generatting coordiantes");

            const geo = [ret[0], ret[1]]

            coords.push(ret);

            callback(null, coords.length ,coords);
        })


    })
}





/**
 * Given start, end city and , call apis to store travel data
 *
 * @param start
 * @param end
 */
exports. store_data = function get (start, end, callback){
    var R = new Records();
    api.retrieve_dir(start, end, function(post){
        var cnt = post.length;

        post.forEach(function(per_post) {

            api.retrieve_weather(per_post['lat'], per_post['lng'], function(err, weather_post){

                if(err)  console.log(err);


                R.store(new Record(start, end, new Date().toLocaleDateString("en-US", options), per_post['lat'], per_post['lng'],weather_post[0],weather_post[1]));

                if(R.allRecords.length == cnt){
                    R.save_all(function(err, post){
                        if(err) console.log("ERROR in saving")
                        else{
                            console.log(post);
                            callback(null, post)
                        }

                    })
                }

            })

        });



    })

}

/**
 * Show all data inside weather_data collection
 * @param callback
 */


exports.show_all_data = function show(callback){
    var R = new Records()

        R.dump_all(function(err, ret){
            if(err) console.log(err);
            callback(null, ret)
        })
}


/**
 * Given City Name, query it's existance inside weather_data
 * @param start_city
 * @param callback
 */

exports.query = function(start_city,callback){
    var R = new Records();
    R.query_target(start_city, function(err, ret){
        if(err) console.log(err);
        callback(null, ret)
    })
}


exports.Query_Direction = function(start_city, end_city, date, callback){
    var R = new Records();
    R.query_direction(start_city, end_city, date, function(err, ret){
        if(err) console.log(err);
        callback(null, ret)
    })
}





