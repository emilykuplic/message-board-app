var myApp= angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider){

  //define our routes, point them at a controller
  $routeProvider
  .when('/messageboard',{
    controller: 'MessageController',
    controllerAs:'mc',
    templateUrl:'/views/templates/message.html'
  })
  // //if route above is not foundabout go to the /home route.
  .otherwise({
    redirectTo:'/home'
  });
});
