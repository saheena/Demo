
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');

var UserSchema = new Schema({

 username:{type:String,lowercase:true,required:true,unique:true},

 password:{type:String,required:true},

 email:{type:String,required:true,lowercase:true,unique:true}

});

// Validating The Password

UserSchema.methods.comparePassword = function(password) {
	return bcrypt.compareSync(password,this.password);
}



UserSchema.pre('save',function(next){

var user = this;
bcrypt.hash(user.password,null,null,function(err,hash){
   
   if(err) return next(err);
  user.password = hash;
  next();
});

});


var UserSchema1 = new Schema({

 start:{type:String,required:true},

 end:{type:String,required:true}
});


/*Now We need To export this file*/

module.exports = mongoose.model('User',UserSchema);
module.exports = mongoose.model('Time',UserSchema1);

