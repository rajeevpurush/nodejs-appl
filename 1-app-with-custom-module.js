// CommonJS, every file is module by default 
//   node uses a library called CommonJS
// Modules - Encapsulated code (only share minimum)

const names = require('./names')
const sayHi = require('./utils')

sayHi(names.peter)
sayHi(names.john)