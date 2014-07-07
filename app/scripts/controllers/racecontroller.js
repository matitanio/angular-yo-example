'use strict';

angular.module('angularApp')
  .controller('RacesController', function ($scope,$routeParams, $rootScope, Ergastapiservice) {


        $scope.races = []

        $rootScope.isComplete = false

        $scope.$emit('setYear', {year:$routeParams.year});

        Ergastapiservice.getRaces($routeParams.year).then(function (response) {
            //Digging into the response to get the relevant data

            $scope.races = response.data.MRData.RaceTable.Races;
            $rootScope.isComplete = true
        },function(){});
  }).controller('RaceController', function ($scope,$routeParams, $rootScope, Ergastapiservice) {


        $scope.race = []
        $rootScope.isComplete = false

        $scope.$emit('setYear', {year:$routeParams.year});

        Ergastapiservice.getRace($routeParams.id, $routeParams.year).then(function (response) {
            //Digging into the response to get the relevant data
            $rootScope.isComplete = true
            $scope.race = response.data.MRData.RaceTable.Races[0];
        },function(){});
    });
