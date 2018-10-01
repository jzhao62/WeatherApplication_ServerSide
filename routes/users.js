var express = require('express');
var router = express.Router();
var main_api = require('../main/main_api.js')


/* GET users listing. */
router.get('/', function(req, res, next) {

    main_api.show_all_data(function(err, feedback){
        if(err) return err;
        res.json(feedback)
    })


});


router.post('/', function(req, res) {

    var n = req.body.start
    var x = req.body.end


    console.log(n + " " + x);

    res.send("data stored, GOOD")





});

module.exports = router;
