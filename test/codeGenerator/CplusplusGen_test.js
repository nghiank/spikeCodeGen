'use strict';

var expect = require('chai').expect;
var CplusplusGen = require('../../src/codeGenerator/CplusplusGen');
var FunctionSignature = require('../../src/functionSignature');
var allTypes = require('../../src/allTypes');

describe("CplusplusGenTest", function() {
		
	var returnType = allTypes.int;
	var params = [allTypes.string];
	it("generate the header properly", function(){
		
		var signature = new FunctionSignature('sortBall', returnType, params);
		var gen = new CplusplusGen(signature);
		var res = gen.generateHeader();
		expect(res).not.to.be.null;
		expect(res).not.to.be.undefined;		
	});
});

