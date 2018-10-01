
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var Record = require('/home/jingyi/WebstormProjects/weatherApp/model/record.js')


function Record_api(){
    this.allRecords = [];
    this.store = function(record){
        this.allRecords.push(record);
    }


}

module.exports = Record_api;


Record_api.prototype.save_all = function save (callback) {


    var total = this.allRecords;

    var cnt = total.length;

    var ret_msg = '';


    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("weather");



        total.forEach(function (record, idx, array) {

            dbo.collection("weather_data").insertOne(record, function (err, res) {
                if (err) throw err;

            })

            if(idx == array.length - 1){
                callback(null, "data all saved to DB, DB closed")
            }


        });

        db.close();
    })


}


Record_api.prototype. dump_all = function dump(callback){

    MongoClient.connect(url, function(err,db){

        if (err) throw err;
        var dbo = db.db("weather");
        var query = {};



        dbo.collection('weather_data').find(query).toArray(function(err, docs){

            db.close();

            var posts = [];

            docs.forEach(function(doc){
                var curr_record = new Record('','','', doc.lat, doc.lon, doc.place, doc.weather);
                posts.push(curr_record);

            })
            callback(null, posts)
        })

    })


}

Record_api.prototype. query_target = function (start_city, callback){
    MongoClient.connect(url, function(err,db){
        if (err) throw err;
        var dbo = db.db("weather");
        var query = {place : start_city};


        dbo.collection('weather_data').find(query).toArray(function(err, docs){

            db.close();

            var posts = [];

            docs.forEach(function(doc){
                var curr_record = new Record('','','', doc.lat, doc.lon, doc.place, doc.weather);
                posts.push(curr_record);

            })
            callback(null, posts)
        })

    })
}


/**
 * Check is direction exists with today's weather data.
 * @param start_city
 * @param end_city
 * @param date
 * @param callback
 */

Record_api.prototype.query_direction = function(start_city, end_city, date, callback){
    MongoClient.connect(url, function(err,db){
        if (err) throw err;
        var dbo = db.db("weather");
        var query = {start : start_city, end : end_city, time : date};


        dbo.collection('weather_data').find(query).toArray(function(err, docs){

            db.close();

            var posts = [];

            docs.forEach(function(doc){
                var curr_record = new Record('','','', doc.lat, doc.lon, doc.place, doc.weather);
                posts.push(curr_record);


            })
            callback(null, posts)
        })

    })


}





