var expect = require('chai').expect;

describe('random-firstName: ', function () {

  var randomAmPm = require('../../');

  it('common', function () {

    var count = 100;
    var now   = new Date();
    var year  = now.getFullYear();

    while (count--) {

      expect(randomAmPm()).to.be.within(year - 100, year);
      expect(randomAmPm(2000)).to.be.within(1900, 2000);
      expect(randomAmPm(1900, 2100)).to.be.within(1900, 2100);
    }
  });
});
