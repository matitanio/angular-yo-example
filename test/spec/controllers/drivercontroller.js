'use strict';

describe('Controller: DrivercontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var DrivercontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DrivercontrollerCtrl = $controller('DrivercontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
