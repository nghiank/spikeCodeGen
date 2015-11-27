'use strict';

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
}

//generate that read data from file 
//which is the first parameter 
CplusplusGen.prototype.generateReadFromFile = function() {
}

//generate write to file
CplusplusGen.prototype.generateWriteToFile = function() {	
}

module.exports = CplusplusGen;











