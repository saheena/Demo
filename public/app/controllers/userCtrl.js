/*console.log("Hello From userCtrl");*/

angular.module("userControllers",['userServices'])

.controller('regCtrl',function($http,$location,$timeout,User){
/*console.log("Hello From Again Ctrl");*/
      
      var app = this;


  this.regUser = function(regData){
      
        app.errorMsg = false;
        app.loading = true;

     console.log("Form Submitted");
     /*console.log(this.regData);	*/
       
       // Connect to MongoDb
        
        //$http.post('/api/users',this.regData).then  this is in userServices.js if u want we can replace this with our code    

           User.create(app.regData).then(function(data){
          console.log(data.data.success);
          console.log(data.data.message);

              if(data.data.success) {
                app.loading = false;
                //create Success Message
                app.successMsg = data.data.message + '.....Redirecting';
                // Redirect To home Page
                 $timeout(function(){
                   $location.path('/');
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

/*                  This is For Time Registration                */
                angular.module('timeControllers',[])

                .controller('timeCtrl',function( $http){
                    /*console.log("testing time ");*/

                   this.timeUser = function(timeData) {
              console.log("testing Button Form Submitted ");  
              console.log(this.timeData);  
 
              $http.post('/apis/times',this.timeData);


                                                   } 
              });