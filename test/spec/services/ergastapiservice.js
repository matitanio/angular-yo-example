'use strict';

describe('Service: Ergastapiservice', function () {

  // load the service's module
  beforeEach(module('angularApp'));

  // instantiate service
  var Ergastapiservice;
  beforeEach(inject(function (_Ergastapiservice_) {
    Ergastapiservice = _Ergastapiservice_;
  }));

  it('should do something', function () {
    expect(!!Ergastapiservice).toBe(true);
  });

});
