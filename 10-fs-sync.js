
const {readFileSync, writeFileSync} = require('fs')

console.log('Start')


const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first, second)
/*
hello this is first text file
 hello this is second text file
*/


/* the content if present then it will get overwritten so we can use
   flag option to append

writeFileSync('./content/result-sync.txt', 
              `Here is the result ${first}, ${second}`)

              */

writeFileSync('./content/result-sync.txt', 
              `Here is the result ${first}, ${second}`, 
              {flag: 'a'})

console.log('Done with this')
console.log('Starting with next one')