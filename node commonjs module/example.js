let formulaParser = require("./index.js");

let obj = formulaParser.parse(`X != Y && U == 6 && (O == 9 || U != 9)`);
console.log(obj);
