'use strict';

var app = angular
  .module('angularApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider.
        when("/drivers/:year", {templateUrl: "views/drivers.html", controller: "DriversControllerCtrl",resolve:{}}).
        when("/drivers", {templateUrl: "views/drivers.html", controller: "DriversControllerCtrl"}).
        when("/drivers/:year/:id", {templateUrl: "views/driver.html", controller: "DriverControllerCtrl"}).
        when("/teams/:year", {templateUrl: "views/teams.html", controller: "TeamsControllerCtrl"}).
        when("/races/:year", {templateUrl: "views/races.html", controller: "RacesController"}).
        when("/races/:year/:id", {templateUrl: "views/race.html", controller: "RaceController"}).
        when("/users", {templateUrl: "views/users.html", controller: "UsersCtrl"}).
        when("/users/:id", {templateUrl: "views/user.html", controller: "UserCtrl"}).
        otherwise({redirectTo: '/drivers'});
  });





app.directive('cuit', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function(viewValue) {

                var aMult   = '6789456789'.split('');
                var sCUIT   = String(viewValue);
                var iResult = 0;
                var aCUIT = sCUIT.split('');

                if (aCUIT.length == 11){
                    // La suma de los productos
                    for(var i = 0; i <= 9; i++)
                    {
                        iResult += aCUIT[i] * aMult[i];
                    }
                    // El módulo de 11
                    iResult = (iResult % 11);

                    // Se compara el resultado con el dígito verificador
                    if(iResult != aCUIT[10]) {
                        ctrl.$setValidity('cuit', false);
                        return undefined;
                    }
                    else{
                        ctrl.$setValidity('cuit', true);
                        return viewValue;
                    }


                }

                ctrl.$setValidity('cuit', false);
                return undefined;
            });
        }
    };
});