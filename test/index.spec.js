'use strict';
var isDefinitelyArray = require('../src');
require('chai').should();

describe('is definitely array', function () {
  it('should return false for constants and objects', function () {
    isDefinitelyArray(2).should.be.false;
    isDefinitelyArray('array').should.be.false;
    isDefinitelyArray({}).should.be.false;
    isDefinitelyArray().should.be.false; 
  });

  it('should return true for arrays', function () {
    isDefinitelyArray([]).should.be.true;
  });
});
