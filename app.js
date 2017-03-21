/**
 * Created by seema on 3/20/17.
 */
console.log("First print");
(function(){
    console.log("First line");
    var app = angular.module('myApp',['ngRoute']);
    app.config(function($routeProvider){
       $routeProvider
           .when('/',{
               templateUrl: 'login.html'
           })
           .when('/register',{
            templateUrl: 'reg.html'
            })
           .when('/profile',{
               templateUrl: 'profile.html'
           })
            .otherwise({redirectTo: '/'});
    });

    app.controller('myCtrl', function($scope, $location){
       $scope.message = 'Welcome';
        $scope.go = function(path){
            console.log("GO called");
            $location.path(path);
        }
        $scope.passUser = function(username){
            console.log(username);
            $scope.username = username;
            $location.path('/profile');
        }
    });
}
)();
