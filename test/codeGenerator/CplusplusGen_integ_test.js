'use strict';

var expect = require('chai').expect;
var CplusplusGen = require('../../src/codeGenerator/Cplusplus/CplusplusGen');
var FunctionSignature = require('../../src/functionSignature');
var allTypes = require('../../src/allTypes');
var Type = require('../../src/type');
var exec = require('sync-exec');
var path = require('path');

describe("CplusplusGenTest", function() {		
	it("generate the program and program can be compiled", function() {
		
		var args = [];
		for (var key in allTypes) {
			if (allTypes.hasOwnProperty(key) && (allTypes[key] instanceof Type)) {
				args.push(allTypes[key]);
			}			
	    }
		
		var signature = new FunctionSignature('sortBall', allTypes.int, args);
		var gen = new CplusplusGen();
        gen.setFunctionSignature(signature);
		
		var userCode = gen.generateFunction();
		userCode = userCode.replace('}', '\treturn 0;\n}');		
		var res = gen.generateProgram(userCode);
		
		//console.log(res);
		
		var fs = require('fs');
		var curPath = path.join(__dirname, 'tmp');
		var file = path.join(__dirname, 'tmp', 'program.cc');
						
		fs.writeFileSync(file, res, 'utf8');		
		var compileResult = exec('g++ -Wall program.cc -o a -std=c++11', {cwd: curPath});
		//console.log(compileResult);
		
		expect(res).not.to.be.null;
		expect(res).not.to.be.undefined;
		expect(compileResult.status).to.equal(0);
	});
});
