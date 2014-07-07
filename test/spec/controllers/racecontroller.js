'use strict';

describe('Controller: RacecontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var RacecontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RacecontrollerCtrl = $controller('RacecontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
