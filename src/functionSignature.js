function FunctionSignature(name, returnType, params) {
    this.name = name;
    this.returnType = returnType;
    this.params = params;
}

FunctionSignature.prototype.getName = function() {
    return this.name;
}

FunctionSignature.prototype.getReturnType = function() {
    return this.returnType;
}

FunctionSignature.prototype.getParams = function() {
    return this.params;
}


