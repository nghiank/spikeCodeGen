'use strict';

var FunctionSignature = require("../src/functionSignature");
var Type = require("../src/type");
var expect = require("chai").expect;
describe("FunctionSignatureTest", function(){
	it("construct properly", function(){		
		var name = "sortArray";
		var returnType = new Type("int");
		var params = [new Type("int")];
		var func = new FunctionSignature(name, returnType, params);
		expect(func.getName()).to.equal("sortArray");
		expect(func.getReturnType()).to.deep.equal(returnType);
		expect(func.getParams()).to.deep.equal(params);
	});
})