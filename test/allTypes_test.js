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
});