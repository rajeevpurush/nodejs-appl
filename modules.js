// CommonJS, every file is module by default 
//   node uses a library called CommonJS
// Modules - Encapsulated code (only share minimum) 
const secure = 'SUPER SECRET' 

/*
Important :
1) if you import a module you actually invokes it 

e.g., 
xyz.js 
    const num1 = 5
    const num2 = 10
    function addValues() {
        console.log(`sum is : ${num1 + num2}`)
        }
    addValues()

So if this mudule is imported then the function would be
executed

*/

/*
built-in modules
1) OS
2) Path
3) FS
4) HTTP

*/