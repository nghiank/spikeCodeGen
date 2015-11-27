'use strict';

var CplusplusGen = require('./codeGenerator/CplusplusGen');



function CodeGenerateFactory() {
	this.generators = {
		"C++": new CplusplusGen()
	};	
}

CodeGenerateFactory.prototype.getGenerator = function(language) {
	if (language in this.generators) {
		return this.generators[language];
	} else {
		return null;
	}
}

module.exports = CodeGenerateFactory;