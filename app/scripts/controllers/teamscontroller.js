'use strict';

angular.module('angularApp')
  .controller('TeamsControllerCtrl', function ($scope,Ergastapiservice, $routeParams, $rootScope) {

        if ($routeParams.year == undefined) {
            $location.url('teams/2014');
        }

        $rootScope.isComplete = false

        $scope.$emit('setYear', {year:$routeParams.year});

        Ergastapiservice.getConstructors($routeParams.year).then(function (response) {
            //Digging into the response to get the relevant data

            $scope.constructorList = response.data.MRData.ConstructorTable.Constructors;
            $rootScope.isComplete = true;
        },function(){});

  }).controller('TeamControllerCtrl', function ($scope) {

});
