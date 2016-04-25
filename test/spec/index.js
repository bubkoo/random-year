var expect = require('chai').expect;

describe('random-year: ', function () {

  var randomYear = require('../../');

  it('common', function () {

    var count = 100;
    var now   = new Date();
    var year  = now.getFullYear();

    while (count--) {

      expect(randomYear()).to.be.within(year - 100, year);
      expect(randomYear({ max: 2000 })).to.be.within(1900, 2000);
      expect(randomYear({ min: 1900 })).to.be.within(1900, 2000);
      expect(randomYear({ min: 1900, max: 2100 })).to.be.within(1900, 2100);
    }
  });
});
