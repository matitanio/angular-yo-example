'use strict';

angular.module('angularApp')
  .controller('MainCtrl', function ($scope,Ergastapiservice) {

         Ergastapiservice.getDrivers().success(function (response) {
            //Digging into the response to get the relevant data
            $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        });
  });
