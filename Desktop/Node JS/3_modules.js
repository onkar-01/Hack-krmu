const names = require('./4_Name');
// console.log(names);
const sayHi = require('./5_utils')
// console.log(modul('onkar'));
sayHi('onkar')
sayHi(names.ronak)
sayHi(names.sagar)


// Modules - Encapsulated code (only share minimum)
// CommonJS, every file is module (by default)

const names = require('./4_Name');
// console.log(names);
const sayHi = require('./5_utils')
const data = require('./6_alternative_flavour');
require('./7_mind_granade');
// console.log(data);
// // console.log(modul('onkar'));
// sayHi('onkar')
// sayHi(names.ronak)
// sayHi(names.sagar)

