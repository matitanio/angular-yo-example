'use strict';

describe('Service: Teamsservice', function () {

  // load the service's module
  beforeEach(module('angularApp'));

  // instantiate service
  var Teamsservice;
  beforeEach(inject(function (_Teamsservice_) {
    Teamsservice = _Teamsservice_;
  }));

  it('should do something', function () {
    expect(!!Teamsservice).toBe(true);
  });

});
