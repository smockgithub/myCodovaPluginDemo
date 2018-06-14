var exec = require('cordova/exec');

var myMathFunc = function(){};  

myMathFunc.prototype.plus = function(arg0, success, error) {
    exec(success, error, "MyCodovaPluginDemo", "Plus", arg0);
};

myMathFunc.prototype.minus = function(arg0, success, error) {
    exec(success, error, "MyCodovaPluginDemo", "Minus", arg0);
};

var MYMATHFUNC = new myMathFunc();
module.exports = MYMATHFUNC; 

// exports.coolMethod = function (arg0, success, error) {
//     exec(success, error, 'MyCodovaPluginDemo', 'coolMethod', [arg0]);
// };
