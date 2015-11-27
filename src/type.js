/**
 * Created by nghia on 11/26/15.
 */

'use strict';

function Type(name, subTypes) {
    this.name = name;
    this.subTypes = subTypes;
}

Type.prototype.getName = function() {
    return this.name;
}

Type.prototype.getSubtypes = function() {
    return this.subTypes;
}

module.exports = Type;
