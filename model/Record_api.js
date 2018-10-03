
var Record = require('/home/jingyi/WebstormProjects/weatherApp/model/record.js')


function Record_api(){
    this.allRecords = [];
    this.store = function(record){
        this.allRecords.push(record);
    }


}

module.exports = Record_api;

