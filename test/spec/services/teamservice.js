'use strict';

describe('Service: Teamservice', function () {

  // load the service's module
  beforeEach(module('angularApp'));

  // instantiate service
  var Teamservice;
  beforeEach(inject(function (_Teamservice_) {
    Teamservice = _Teamservice_;
  }));

  it('should do something', function () {
    expect(!!Teamservice).toBe(true);
  });

});
