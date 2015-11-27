'use strict';
var Type = require('./type');

//int
var int = new Type('int');
module.exports.int = int;

var double = new Type('double');
module.exports.double = double;

var string = new Type('string');
module.exports.string = string;

var voidType = new Type('void');
module.exports.voidType = voidType;

//array
var vectorInt = new Type('vector', int);
module.exports.vectorInt = vectorInt;

var vectorDouble = new Type('vector', double);
module.exports.vectorDouble = vectorDouble;

var vectorString = new Type('vector', string);
module.exports.vectorString = vectorString;







