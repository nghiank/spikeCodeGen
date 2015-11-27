var expect = require("chai").expect;
var Type = require("../src/type.js");

describe("TestType", function(){
    it("construct proper Type", function(){
       var type = new Type("string");
        expect(type.getName()).to.equal("string");
    });

    it("construct proper Type with subTypes", function(){
        var type1 = new Type("string");
        var type2 = new Type("int");
        var type = new Type("map", [type1, type2]);
        expect(type.getName()).to.equal("map");
        expect(type.getSubtypes()).to.deep.equal([type1, type2]);
    });
});


