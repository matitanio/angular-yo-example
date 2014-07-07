'use strict';

angular.module('angularApp')
    .controller('UsersCtrl', function ($scope,$rootScope) {

        $rootScope.isComplete = false

        $scope.usersList = $rootScope.usersList;

        $rootScope.isComplete = true;

        $scope.delete = function(userId){

            $rootScope.usersList.splice(userId -1,1);
        }

    }).controller('UserCtrl', function ($scope,$rootScope,$routeParams) {


        $scope.user = $rootScope.usersList[$routeParams.id-1];

    });


