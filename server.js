// packages
var express                 = require('express');
var app                     = express();
var port                    = process.env.PORT || 8080;
var morgan                  = require('morgan');
var mongoose                = require('mongoose');
/*Calling user.js UserSchema Here*/
/*var User                    = require('./app/models/user');*/
/*var Time                   = require('./app/models/user');*/

var bodyParser              =  require('body-parser');

var router                  = express.Router();
var appRoutes               = require('./app/routes/api')(router);
var appRoutess               = require('./app/routes/apis')(router);

var path                    = require('path');

/*Middle wares use*/
app.use(morgan('dev')); // it tells logging our request
app.use(bodyParser.json()); // start pasrsing the data
app.use(bodyParser.urlencoded({extended:true})); // 
app.use(express.static(__dirname + '/public')); // middleware static pages
app.use('/api',appRoutes); // start using routes

app.use('/apis',appRoutess); // start using routes

// the differnce above is normally our url look like http://localhost:8080/users
// now our url look like this http://localhost:8080/api/users
// now our url look like this http://localhost:8080/api1/times



// Mongodb
mongoose.connect('mongodb://localhost/tutorialsDemo/27017',function(err){

if(err) {
	console.log('Not connected to Database' +err);
}
else {
console.log('Successfully connected to Database TutorialsDemo');	
}

});





/*Callling Public/app/views folder */
app.get('*',function(req,res){
res.sendFile(path.join(__dirname+ '/public/app/views/index.html'));
});





app.listen(port,function(){
	console.log('Running at port ' + port);
});