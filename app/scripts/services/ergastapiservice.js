'use strict';

angular.module('angularApp')
    .service('Ergastapiservice', function Ergastapiservice($http,$rootScope,$q) {


        var ergastAPI = {};

        ergastAPI.getDrivers = function(year) {
            return $http({
                method: 'JSONP',
                url: 'http://ergast.com/api/f1/' + year+ '/driverStandings.json?callback=JSON_CALLBACK'
            })
        }


        ergastAPI.getDriverDetails = function(id,year) {
            return $http({
                method: 'JSONP',
                url: 'http://ergast.com/api/f1/' + year + '/drivers/'+ id +'/driverStandings.json?callback=JSON_CALLBACK'
            });
        }

        ergastAPI.getDriverRaces = function(id, year) {
            return $http({
                method: 'JSONP',
                url: 'http://ergast.com/api/f1/' + year + '/drivers/'+ id +'/results.json?callback=JSON_CALLBACK'
            });
        }

        ergastAPI.getConstructors = function(year){


            return $http({
                method: 'JSONP',
                url: 'http://ergast.com/api/f1/' + year +  '/constructors.json?callback=JSON_CALLBACK'
            });
        }

        ergastAPI.getRaces = function(year){


            return $http({
                method: 'JSONP',
                url: 'http://ergast.com/api/f1/' + year + '/results/1.json?callback=JSON_CALLBACK'
            });
        }

        ergastAPI.getRace = function(id, year){


            return $http({
                method: 'JSONP',
                url: 'http://ergast.com/api/f1/' + year + '/' + id + '/results.json?callback=JSON_CALLBACK'
            });
        }

        ergastAPI.getRaceWinners = function() {
            return $http({
                method: 'JSONP',
                url: 'http://ergast.com/api/f1/2013/results/1.json?callback=JSON_CALLBACK'
            });
        }

        return ergastAPI;
    });
