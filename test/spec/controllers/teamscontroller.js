'use strict';

describe('Controller: TeamscontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var TeamscontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeamscontrollerCtrl = $controller('TeamscontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
