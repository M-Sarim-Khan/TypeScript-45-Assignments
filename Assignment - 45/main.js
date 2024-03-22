var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Assignment:45: Cars: 
// Write a function that stores information about a car in an Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// SOLUTION:
function storeCarInformation(manufacturer, modelName) {
    var extraOption = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extraOption[_i - 2] = arguments[_i];
    }
    var CarInformation = __assign({ manufacturer: manufacturer, modelName: modelName }, Object.assign.apply(Object, __spreadArray([{}], extraOption, false)));
    return CarInformation;
}
;
var result = storeCarInformation("Toyota", "Yaris", { color: "white" }, { features: ["Air bags", "Hybrid"] });
console.log(result);
