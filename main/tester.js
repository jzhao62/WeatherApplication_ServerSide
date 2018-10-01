var main_api = require('./main_api')

// main_api.query("Chicago",function (err, feedback) {
//     if(err) console.log(err)
//     else{
//         console.log(feedback)
//     }
//
// })

const start = 'Chicago';
const end = 'Universal Studio, CA';
const end1 = 'University of Wisconsin Madison'
const end2 = 'Times Square, NY'
const end3 = 'Seattle, WA'
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };



// main_api.store_data(start, end3, function(err, ret){
//     if(err) console.log(err);
//     console.log(ret.length);
// })
//
// //
// // main_api.Query_Direction(start, end3, new Date().toLocaleDateString("en-US", options), function(err, ret){
// //     if(err) console.log(err);
// //     if(ret.length == 0){
// //         console.log('Cannot find');
// //     }
// //
// //     else{
// //         console.log("GOOD")
// //     }
// // })



var sync = require('synchronize');
var fiber = sync.fiber;
var await = sync.await;
var defer = sync.defer;



//
// function f1 (){
//     setTimeout(function(){
//         console.log(1);
//     },5000)
// }
// function f2 (){
//     setTimeout(function(){
//         console.log(2);
//     },2000)
// }
// function f3 (){
//     setTimeout(function(){
//         console.log(3);
//     },500)
// }
//
//
//
//
//
// try {
//     fiber(function() {
//         var obj1 = await( f1( defer() ) );
//         var obj2 = await( f2( obj1, defer() ) );
//         var result = await( f3( obj2, defer() ) );
//     });
// } catch(err) {
//     //TODO Handle error
// }