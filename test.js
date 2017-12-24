var should = require('should');

var nextPrime = require('./app');


describe('Next Prime Generator', function () {
    it('should return the next prime number', function () {
        nextPrime(3).should.be.above(3);
        nextPrime(3).should.equal(5);

        nextPrime(5).should.be.above(5);
        nextPrime(5).should.equal(7);

        nextPrime(7).should.be.above(7);
        nextPrime(7).should.equal(11);

        nextPrime(11).should.equal(13);
        nextPrime(11).should.be.above(11);

        nextPrime(19).should.equal(23);
        nextPrime(19).should.be.above(19);
    });
});