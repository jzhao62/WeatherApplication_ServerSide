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


