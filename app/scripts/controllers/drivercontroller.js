'use strict';

angular.module('angularApp')
  .controller('DriversControllerCtrl', function ($scope,$rootScope,$routeParams,Ergastapiservice, $location) {

        $scope.nameFilter = null;
        $scope.driversList = [];
        $rootScope.isComplete = false
        $scope.year = $routeParams.year
        $scope.searchFilter = function (driver) {
            var re = new RegExp($scope.nameFilter, 'i');
            return !$scope.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName);
        };

        if ($routeParams.year == undefined) {
              $location.url('drivers/2014');
        }


        $scope.$emit('setYear', {year:$routeParams.year});

        Ergastapiservice.getDrivers($routeParams.year).then(function(response) {
            // promise fulfilled

            $scope.driversList = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            $rootScope.isComplete = true


        }, function(error) {
            // promise rejected, could log the error with: console.log('error', error);
            alert('data error');
        });
        /*
        Ergastapiservice.getDrivers($routeParams.year).success(function (response) {

            $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        });*/




  }).controller('DriverControllerCtrl', function($scope, $routeParams,$rootScope, Ergastapiservice) {
        $scope.id = $routeParams.id;
        $scope.races = [];
        $scope.driver = null;
        $rootScope.isComplete = false

        Ergastapiservice.getDriverDetails($routeParams.id,$routeParams.year).then(function (response) {
            $scope.driver = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
            $rootScope.isComplete = true
        }, function(error) {

        });

        $scope.$emit('setYear', {year:$routeParams.year});

        Ergastapiservice.getDriverRaces($scope.id, $routeParams.year).success(function (response) {
            $scope.races = response.MRData.RaceTable.Races;
        });
    }).controller('MainController', function($scope, $location, $rootScope) {

        $scope.years = [
            {year:'2014'},
            {year:'2013'},
            {year:'2012'},
            {year:'2011'},
            {year:'2010'},
            {year:'2006'},
            {year:'1997'},
            {year:'1950'}

        ];

        $scope.links = [
            {name:'drivers', url:'drivers'},
            {name:'teams', url:'teams'},
            {name:'races', url:'races'}

        ];

        $scope.changeYear = function() {

            var paths = $location.path().split('/')

                  $location.url(paths[1]+'/'+$scope.year.year);
        };

        $scope.$on('setYear', function(e, year) {

            var yearSelected

            for( var i = 0; i < $scope.years.length;i++ )
               if ($scope.years[i].year == year.year)
                   yearSelected = $scope.years[i]

            $scope.year = yearSelected;
        });

        $rootScope.usersList = [
            {id:'1',username:'matitanio',email:'matitanio@hotmail.com',cuit:'20312345595',birthDate:'24/12/1984',name:'Matias'},
            {id:'2',username:'pepe',email:'pepe@hotmail.com',cuit:'20312345595',birthDate:'10/11/1982',name:'Jose'},
            {id:'3',username:'ernesto',email:'ernesto@hotmail.com',cuit:'20312345595',birthDate:'5/6/1970',name:'Ernesto'},
            {id:'4',username:'juan',email:'juan@hotmail.com',cuit:'20312345595',birthDate:'5/6/1970',name:'Juan'},
            {id:'5',username:'pancho',email:'pancho@hotmail.com',cuit:'20312345595',birthDate:'5/6/1970',name:'Francisco'},
            {id:'6',username:'tito',email:'tito@hotmail.com',cuit:'20312345595',birthDate:'5/6/1970',name:'Ernestito'}
        ] ;

    })
;
