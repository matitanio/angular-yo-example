'use strict';

describe('Service: Teamsservixe', function () {

  // load the service's module
  beforeEach(module('angularApp'));

  // instantiate service
  var Teamsservixe;
  beforeEach(inject(function (_Teamsservixe_) {
    Teamsservixe = _Teamsservixe_;
  }));

  it('should do something', function () {
    expect(!!Teamsservixe).toBe(true);
  });

});
