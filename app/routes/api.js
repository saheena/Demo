var User                    =         require('../models/user');

// this are our ROUTES
/*Create Route For users collection */
// http://localhost:8080/api/users

/*Start*/
module.exports = function(router) {

/// This is for USER REGISTRATION
router.post('/users',function(req,res){
/*res.send(" Testing the connection");*/

var user = new User();

   user.username  = req.body.username;
   user.password  = req.body.password;
   user.email     = req.body.email;
  
  if(req.body.username == null || req.body.username == '' || req.body.password == null || 
    req.body.password == '' || req.body.email == null || req.body.email == '') {
    /*res.send("Ensure Username,password,email are provided");*/
       res.json({success:false,message:'Ensure Username,password,email are provided'});
  } 
  else {
      user.save(function(err){
    if(err) {

     /*res.send("Username or File Already Exists");*/
      res.json({success:false,message:'Username or File Already Exists'});
  }
  else {
  /*res.send("Successfully inserted");*/
 res.json({success:true,message:'Successfully inserted'});
  }
   });  
  }

});


// USER LOGIN ROUTE
// it lokks like http://localhost:8080/api/authenticate
router.post('/authenticate',function(req,res){
  /*res.send("Testing New Login"); */
   User.findOne({ username:req.body.username }).select('email username password').exec(function(err,user){
    if(err) throw err;

    if(!user){
      res.json({success:false,message:"could not authenticate"});
    } 
    else if(user) {
      if(req.body.password) {
        var validPassword =  user.comparePassword(req.body.password);
      }
      else {
        res.json({success:false,message:"No Password Provided"});
      }
       if(!validPassword){
        res.json({success:false,message:"could not Authenticate"});
       }  else {
        res.json({success:true,message:"User Authenticated"});
       }
    }
   });

});








return router; // 

} /*End*/


