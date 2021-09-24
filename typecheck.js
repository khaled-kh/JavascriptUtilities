
function typeOf(obj) { return isUndefined(obj)?"undefined":isNull(obj)?"null":Object.prototype.toString.call(obj).match(/^\[object\s(.*)\]$/)[1]; }
function classOf(obj) { return isObject(obj) ? obj.constructor.name : typeOf(obj); }

function isNumber(obj) { return typeOf(obj) === "Number"; }
function isInteger(obj) { return isNumber(obj) && Math.floor(obj) === obj; }
function isBoolean(obj) { return typeOf(obj) === "Boolean"; }
function isString(obj) { return typeOf(obj) === "String"; }
function isArray(obj) { return typeOf(obj) === "Array"; }
function isObject(obj) { return typeOf(obj) === "Object"; }
function isInstance(obj,clazz) { return isObject(obj) && classOf(obj) === clazz; }
function isFunction(obj) { return typeOf(obj) === "Function"; }
function isNull(obj) { return obj === null; }
function isUndefined(obj) { return typeof obj === "undefined"; }

function expectNumber(obj,param) { if(!isNumber(obj)) throw new TypeError(param+" must be Number"); }
function expectInteger(obj,param) { if(!isInteger(obj)) throw new TypeError(param+" must be Number(Integer)"); }
function expectBoolean(obj,param) { if(!isBoolean(obj)) throw new TypeError(param+" must be Boolean"); }
function expectString(obj,param) { if(!isString(obj)) throw new TypeError(param+" must be String"); }
function expectArray(obj,param) { if(!isArray(obj)) throw new TypeError(param+" must be Array"); }
function expectObject(obj,param) { if(!isObject(obj)) throw new TypeError(param+" must be Object"); }
function expectInstance(obj,param,clazz) { if(!isInstance(obj,clazz)) throw new TypeError(param+" must be Object("+clazz+")"); }
function expectFunction(obj,param) { if(!isFunction(obj)) throw new TypeError(param+" must be Function"); }
