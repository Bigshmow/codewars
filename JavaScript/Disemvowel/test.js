//   unit test with chai

var expect = require("chai").expect;
var disemvowel = require("./disemvowel");

describe('Disemvowel', function() {
    it('Should remove all upper/lowercase vowels from a string', function () {
        expect(disemvowel('This website is for losers LOL')).to.equal('Ths wbst s fr lsrs LL')
    })
})