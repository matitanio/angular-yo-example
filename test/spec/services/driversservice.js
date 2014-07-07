'use strict';

describe('Service: Driversservice', function () {

  // load the service's module
  beforeEach(module('angularApp'));

  // instantiate service
  var Driversservice;
  beforeEach(inject(function (_Driversservice_) {
    Driversservice = _Driversservice_;
  }));

  it('should do something', function () {
    expect(!!Driversservice).toBe(true);
  });

});
