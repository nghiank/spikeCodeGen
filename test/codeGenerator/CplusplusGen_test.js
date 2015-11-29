'use strict';

var expect = require('chai').expect;
var CplusplusGen = require('../../src/codeGenerator/Cplusplus/CplusplusGen');
var FunctionSignature = require('../../src/functionSignature');
var allTypes = require('../../src/allTypes');

describe("CplusplusGenTest", function() {
		
	var returnType = allTypes.int;
	var params = [allTypes.string];
	it("generate the header properly", function(){
		
		var signature = new FunctionSignature('sortBall', returnType, params);
		var gen = new CplusplusGen(signature);
		var res = gen.generateHeader();
		
		//Todo: what is best way to test?
		expect(res).not.to.be.null;
		expect(res).not.to.be.undefined;		
	});
	
	it("generate the function signature with double params properly", function() {
		
		var args = [allTypes.int, allTypes.string];
		var signature = new FunctionSignature('sortBall', returnType, args);
		var gen = new CplusplusGen(signature);
		var res = gen.generateFunction();
		
		expect(res.indexOf('int sortBall(int a,string& b) {')).to.equal(0);
		expect(res[res.length-1]).to.equal('}');		
	});
	
	it("generate the function signature properly with vector params", function() {
		
		var args = [allTypes.vectorInt];
		var signature = new FunctionSignature('sortBall', allTypes.voidType, args);
		var gen = new CplusplusGen(signature);
		var res = gen.generateFunction();
				
		expect(res.indexOf('void sortBall(vector<int>& a) {')).to.equal(0);
		expect(res[res.length-1]).to.equal('}');		
	});
	
	it("generate the function signature properly with 2D vector params", function() {
		
		var args = [allTypes.vectorVectorInt];
		var signature = new FunctionSignature('sortBall', allTypes.voidType, args);
		var gen = new CplusplusGen(signature);
		var res = gen.generateFunction();
				
		expect(res.indexOf('void sortBall(vector<vector<int>>& a) {')).to.equal(0);
		expect(res[res.length-1]).to.equal('}');		
	});
	
	it("generate the program body properly", function() {
		var args = [allTypes.vectorInt, allTypes.string];
		var signature = new FunctionSignature('sortBall', allTypes.int, args);
		var gen = new CplusplusGen(signature);
		var res = gen.generateBody();
		
		expect(res).not.to.be.null;
		expect(res).not.to.be.undefined;		
	});
	
	it("generate the program properly", function() {
		var args = [allTypes.int, allTypes.vectorVectorInt, allTypes.vectorString];
		var signature = new FunctionSignature('sortBall', allTypes.int, args);
		var gen = new CplusplusGen(signature);
		
		var userCode = gen.generateFunction();
		userCode = userCode.replace('}', '\treturn 0;\n}');		
		var res = gen.generateProgram(userCode);
		
		expect(res).not.to.be.null;
		expect(res).not.to.be.undefined;
	})
	
});

