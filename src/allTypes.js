'use strict';
var Type = require('./type');

//single 
var int = new Type('int');
module.exports.int = int;

var double = new Type('double');
module.exports.double = double;

var string = new Type('string');
module.exports.string = string;

//array 1D
var vectorInt = new Type('vector', [int]);
module.exports.vectorInt = vectorInt;


var vectorDouble = new Type('vector', [double]);
module.exports.vectorDouble = vectorDouble;

var vectorString = new Type('vector', [string]);
module.exports.vectorString = vectorString;

//array 2D
var vectorVectorInt = new Type('vector', [vectorInt]);
module.exports.vectorVectorInt = vectorVectorInt;

var vectorVectorDouble = new Type('vector', [vectorDouble]);
module.exports.vectorVectorDouble = vectorVectorDouble;

//helper function
module.exports.isString = function(type) {
	return type.getName() === string.getName();
}

module.exports.isContainer = function(type) {
	return type.getName() === vectorInt.getName();
}






