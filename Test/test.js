var assert = require('assert');
var test = require('.\streaming\apiproxy\resources\jsc\calc.js');
describe("calcTest",function(){
  describe('addTest', function() {
    it('it should give valid result', function(){
      assert.equal(5, test.checkSum(2,3));
    });
  });

  describe('multiTest', function() {
    it('it should give valid result', function(){
      assert.equal(6, test.checkMulti(2,3));
    });
  });

  describe('divTest', function() {
    it('it should give valid result', function(){
      assert.equal(2, test.checkDiv(6,3));
    });
  });
});
