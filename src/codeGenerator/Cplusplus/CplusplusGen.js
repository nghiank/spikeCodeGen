'use strict';
var allTypes = require('../../allTypes');

function CplusplusGen(functionSignature) {
	this.func = functionSignature;
}

//generate the include header & namespace
CplusplusGen.prototype.generateHeader = function() {
	
	//C++11
	var libs = ["algorithm", "string",
			   "map", "vector", "list", "array", "set", 
			   "multiset", "multimap",
			   "unordered_set", "unordered_multiset", 
			   "unordered_map", "unordered_multimap",
			   "stack", "deque", "queue", "priority_queue",			   
			   "utility", "functional", "numeric",
			   "sstream", 		   
			   "bitset", "cmath", "cstdio", "cstdlib", "ctime"]
	var res = "";
	for(var i = 0; i < libs.length; ++i) {
		res = res + "#include <" + libs[i] + ">\n"
	}
	res += "using namesapce std;\n";		
	return res;	
}


//generate the function signature
CplusplusGen.prototype.generateFunction = function() {
	var res = this.getNameDeclaration(this.func.getReturnType(), true);	
	res += this.func.getName()
	
	var arr = [];
	var params = this.func.getParams();
	for(var i = 0; i < params.length; ++i) {
		arr.push(this.getNameDeclaration(params[i]) + String.fromCharCode(i + 97));
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
		arr.push(this.genReadFromFile(params[i], String.fromCharCode(i+97)));
	}
	var res = arr.join('\n');	
	return res;
	
	
}

//generate write to file
CplusplusGen.prototype.generateProgram = function() {	
}


//Todo : make it private
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
	res += '>';
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











