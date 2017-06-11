/*console.log("testing New File");*/

angular.module('mainController',['authServices'])

.controller('mainCtrl',function(Auth,$timeout,$location){
/*console.log("Testing");*/
// Create same as userCtrl.js 

 var app = this;


  this.doLogin = function(loginData){
      
        app.errorMsg = false;
        app.loading = true;

     console.log("Form Login Submitted");
     /*console.log(this.regData);	*/
       
       // Connect to MongoDb
        
        //$http.post('/api/users',this.regData).then  this is in userServices.js if u want we can replace this with our code    

           Auth.login(app.loginData).then(function(data){
          console.log(data.data.success);
          console.log(data.data.message);

              if(data.data.success) {
                app.loading = false;
                //create Success Message
                app.successMsg = data.data.message + '.....Redirecting';
                // Redirect To home Page
                 $timeout(function(){
                   $location.path('/about');
                 },2000);
                 /*$location.path('/');*/

              }
              else {
                app.loading = false;
                 app.errorMsg = data.data.message;
              }


       });

  };

});
