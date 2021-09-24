module.exports = {
    typeOf: function(obj) { return isUndefined(obj)?"undefined":isNull(obj)?"null":Object.prototype.toString.call(obj).match(/^\[object\s(.*)\]$/)[1]; },
    classOf: function(obj) { return isObject(obj) ? obj.constructor.name : typeOf(obj); },
    //-------------------------------------------------
    isNumber: function(obj) { return typeOf(obj) === "Number"; },
    isInteger: function(obj) { return isNumber(obj) && Math.floor(obj) === obj; },
    isBoolean: function(obj) { return typeOf(obj) === "Boolean"; },
    isString: function(obj) { return typeOf(obj) === "String"; },
    isArray: function(obj) { return typeOf(obj) === "Array"; },
    isObject: function(obj) { return typeOf(obj) === "Object"; },
    isInstance: function(obj,clazz) { return isObject(obj) && classOf(obj) === clazz; },
    isFunction: function(obj) { return typeOf(obj) === "Function"; },
    isNull: function(obj) { return obj === null; },
    isUndefined: function(obj) { return typeof obj === "undefined"; },
    //-------------------------------------------------
    expectNumber: function(obj,param) { if(!isNumber(obj)) throw new TypeError(param+" must be Number"); },
    expectInteger: function(obj,param) { if(!isInteger(obj)) throw new TypeError(param+" must be Number(Integer)"); },
    expectBoolean: function(obj,param) { if(!isBoolean(obj)) throw new TypeError(param+" must be Boolean"); },
    expectString: function(obj,param) { if(!isString(obj)) throw new TypeError(param+" must be String"); },
    expectArray: function(obj,param) { if(!isArray(obj)) throw new TypeError(param+" must be Array"); },
    expectObject: function(obj,param) { if(!isObject(obj)) throw new TypeError(param+" must be Object"); },
    expectInstance: function(obj,param,clazz) { if(!isInstance(obj,clazz)) throw new TypeError(param+" must be Object("+clazz+")"); },
    expectFunction: function(obj,param) { if(!isFunction(obj)) throw new TypeError(param+" must be Function"); }
}
