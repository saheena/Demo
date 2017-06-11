var Time                   =  require('../models/user');

module.exports = function(router) {
	// http://localhost:8080/times
router.post('/times',function(req,res) {
/* res.send("time is Working");*/
   
  var time = new Time();
   time.start = req.body.start;
   time.end   = req.body.end;
      
      if(req.body.start == null || req.body.start == '' || req.body.end == null || req.body.end == '') {
      	res.send("Ensure Start and End time Decalred")
      } 
      else {

   time.save(function(err){
       if(err) {
       	res.send("Start or End time Already Declared");
       }
       else {
       	res.send("Time Created");
       }
   });
   
}

});
return router;
}