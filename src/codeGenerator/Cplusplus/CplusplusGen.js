'use strict';
var allTypes = require('../../allTypes');
var fs = require('fs');
var path = require('path');

function CplusplusGen() {
}

CplusplusGen.prototype.setFunctionSignature = function(funcSignature) {
	this.func = funcSignature;
}

CplusplusGen.prototype.getVariableName = function(i) {
	return String.fromCharCode(i+97) + "_var";	
}

//generate the include header & namespace
CplusplusGen.prototype.generateHeader = function() {
	var fileName = "header.cc";
	var file = path.join(__dirname, 'snippet', fileName);
	var code = fs.readFileSync(file, 'utf8');
	return code;
}


//generate the function signature
CplusplusGen.prototype.generateFunction = function() {
	var res = this.getNameDeclaration(this.func.getReturnType(), true);	
	res += this.func.getName()
	
	var arr = [];
	var params = this.func.getParams();
	for(var i = 0; i < params.length; ++i) {
		arr.push(this.getNameDeclaration(params[i]) + this.getVariableName(i));
	}
		
	res += "(";
	if (arr.length != 0) {
		res += arr.join(',');
	} 
	res += ") {\n";
	res += "\t// fill up your solution here\n";
	res += "}"  
	return res;
}

//generate that read data from file 
//which is the first parameter 
CplusplusGen.prototype.generateBody = function() {
		
	var params = this.func.getParams();
	var arr = [];	
	for(var i = 0; i < params.length; ++i) {
		arr.push(this.genReadFromFile(params[i], this.getVariableName(i)));
	}
	var res = arr.join('\n');
	return res;
}

CplusplusGen.prototype.generateCallUserFunction = function() {
	var params = this.func.getParams();
	var sz = params.length;
	var variableName = this.getVariableName(sz);
	var res = this.getName(this.func.getReturnType());
	res += " " + variableName + " = ";
	res += this.func.getName();
	res += "("
	var arr = [];
	for(var i = 0; i < sz; ++i) {
		arr.push(this.getVariableName(i));
	}
	res += arr.join(',');
	res += ");"	
	return res;
}

CplusplusGen.prototype.generateWriteUserOutput = function() {
	var params = this.func.getParams();
	var sz = params.length;
	var variableName = this.getVariableName(sz);
	
	var fileName = this.getFileNameTemplate(this.func.getReturnType());
	var file = path.join(__dirname, 'snippet/write', fileName);
	var code = fs.readFileSync(file, 'utf8');
	var res = code.replace(new RegExp('variableName','g'), variableName);	
	return res;
}

//generate write to file

CplusplusGen.prototype.generateProgram = function(userCode) {	
	var fileName = "mainBody.cc";
	var file = path.join(__dirname, 'snippet', fileName);
	var code = fs.readFileSync(file, 'utf8');
	
	var header = this.generateHeader();
	var readAndDeclare = this.generateBody();
	var callUserFunction = this.generateCallUserFunction();
	var writeUserOutput = this.generateWriteUserOutput();
	code = code.replace('includeHeader', header);	
	code = code.replace('userFunctionSolution', userCode);
	code = code.replace('readAndDeclare', readAndDeclare);
	code = code.replace('callUserSolution', callUserFunction);
	code = code.replace('writeUserOutput', writeUserOutput);	
	
	//console.log(code);
	return code;
	
}


//Todo : make it private
//Todo: scale it by load the file into memory

//support single subtype currently
CplusplusGen.prototype.getFileNameTemplate = function(type) {
	var cnt = 0; // detect if it is non-array, 1D array or 2D array
	while(type) {
		var subtypes = type.getSubtypes();
		if (type.getName() == allTypes.vectorInt.getName()) {
			++cnt;
		}
		if (subtypes && subtypes.length > 0) {
			type = subtypes[0];
		} else break;	
	}	
	
	var fileNames = ["single.cc", "array1D.cc", "array2D.cc"];
	return fileNames[cnt];
}

CplusplusGen.prototype.genReadFromFile = function(type, variableName) {

	var fileName = this.getFileNameTemplate(type);
	var file = path.join(__dirname, 'snippet/read/', fileName);
	var code = fs.readFileSync(file, 'utf8');
	var res = code.replace(new RegExp('variableName','g'), variableName);
	var variableType = this.getName(type);	
	res = res.replace(new RegExp('variableType', 'g'), variableType);		
	return res;
} 

CplusplusGen.prototype.getName = function(type) {
	if (!allTypes.isContainer(type)) {
		return type.getName();
	}
			
	var arr = [];
	var sub = type.getSubtypes();
	for(var i = 0 ; i < sub.length; ++i) {
		arr.push(this.getName(sub[i]));		
	}
	
	var res = type.getName() + '<';
	res += arr.join(',');
	res += ' >';
	return res;
		
}

CplusplusGen.prototype.getNameDeclaration = function(type, isReturnType) {	
	
	var res = this.getName(type);
	if (!isReturnType && (allTypes.isString(type) || allTypes.isContainer(type))){
		res += "&"				
	}	
	return res + " ";
}

module.exports = CplusplusGen;











