var express = require('express');
var router = express.Router();
var main_api = require('../main/main_api.js')
var api = require('../model/apis.js')
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


/* GET users listing. */
router.get('/', function(req, res, next) {

    main_api.show_all_data(function(err, feedback){
        if(err) return err;
        res.json(feedback)
    })


});






router.post('/update_coordinate', function(req, res){

    console.log('update_coordinate Triggered')

    main_api.generate_coordinates([req.body.start_city, req.body.end_city],
        function(err, msg, ret){
        if(err) console.log(err);

        if(ret.length == 2){
            res.json(ret);
        }

        console.log("RESULTS " + msg + ret)
    })

})





router.post('/handle_input', function(req, res) {

    const n = req.body.start
    const x = req.body.end


    console.log(n + " " + x + " received");
    console.log('handle userinput Triggered')


    main_api.Query_Direction(n, x, new Date().toLocaleDateString("en-US", options), function(err, ret){
        if(err) console.log(err);
        if(ret.length == 0){
            console.log('Cannot find Direction, go retrieve');
            main_api.store_data(n, x,function(err, ret){
                if(err) console.log('ERROR is callback when retrieve_and_query')

                console.log(ret + " at router")
                res.json(ret)
            })

        }

        else{
            console.log("Data already there")
            res.json(ret);


        }
    })


});

module.exports = router;
