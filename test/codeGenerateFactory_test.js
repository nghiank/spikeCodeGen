'use strict';
var expect = require('chai').expect;
var CodeGenerateFactory = require('../src/codeGenerateFactory');
var CplusplusGen = require('../src/codeGenerator/CplusplusGen');

describe("CodeGenerateFactoryTest", function(){
	
	var codeGenFactory = new CodeGenerateFactory();
		
	it("construct c++ generator", function() {
		var codeGen = codeGenFactory.getGenerator("C++");		
		expect(codeGen instanceof CplusplusGen).to.equal(true);		
	});
	
	it("construct not recognize generator", function() {
		var codeGen = codeGenFactory.getGenerator("HAHA_HOHO");		
		expect(codeGen).to.equal(null);
	})
});