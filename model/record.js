var mongodb = require('./db.js')

function Record(start, end, time, lat, lon, place, weather){
    this.start = start;
    this.end = end;
    this.time = time;
    this.lat = lat;
    this.lon = lon;
    this.place = place;
    this.weather = weather;
}





module.exports = Record;



//
//
// Record.get = function get(callback){
//
//     mongodb.open(function(err, db){
//         if(err) return callback(err);
//     })
//
//     db.collection('weather_data', function(err, collection){
//         if(err){
//             mongodb.close();
//             return callback(err);
//         }
//
//
//         var query = {};
//
//         collection.find(query).toArray(function(err, docs){
//
//             mongodb.close();
//             if(err) callback(err, null);
//
//             var posts = [];
//
//             docs.forEach(function(doc){
//                 var curr_record = new Record(doc.lat, doc.lon,doc.place, doc.weather);
//                 posts.push(curr_record);
//                 callback(null, )
//             })
//
//
//         })
//
//     })
//
// }