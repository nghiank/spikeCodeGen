'use strict';

var expect = require('chai').expect;
var allTypes = require('../src/allTypes');

describe('allTypesTest', function(){
	it('declares all types properly', function(){
		expect(allTypes.int.getName()).to.equal('int');
		expect(allTypes.double.getName()).to.equal('double');
		expect(allTypes.string.getName()).to.equal('string');
		expect(allTypes.vectorInt.getName()).to.equal('vector');
		expect(allTypes.vectorDouble.getName()).to.equal('vector');
		expect(allTypes.vectorString.getName()).to.equal('vector');		
	});
	
	it('check type correctly', function() {
		expect(allTypes.isString(allTypes.string)).to.true;
		expect(allTypes.isString(allTypes.int)).to.false;
		expect(allTypes.isString(allTypes.vectorInt)).to.false;
		
		expect(allTypes.isContainer(allTypes.vectorInt)).to.true;
		expect(allTypes.isContainer(allTypes.vectorDouble)).to.true;
		expect(allTypes.isContainer(allTypes.vectorString)).to.true;
		expect(allTypes.isContainer(allTypes.string)).to.false;
		expect(allTypes.isContainer(allTypes.double)).to.false;
		
	});
});