
// Since it built in module we just put in os within quotes
const os = require('os')

// As soon as type of os. i will all the properties and functions

console.log(os.userInfo())
/*
PS C:\Users\PURUSHOR\nodejstutorial> node app.js
{
  uid: -1,
  gid: -1,
  username: 'PurushoR',
  homedir: 'C:\\Users\\PURUSHOR',
  shell: null
}
*/
console.log(`The system uptime is ${os.uptime()} seconds`)
/*
The system uptime is 235937 seconds
*/
const currentOS = {
  name: os.type(),
  release:os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}

console.log(currentOS)

/*
{
  name: 'Windows_NT',
  release: '10.0.19045',
  totalMem: 16985968640,
  freeMem: 5793812480
}
*/


const path = require('path')

console.log(path.sep)

/*
\
*/


const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

/*
\content\subfolder\test.txt
*/
const base = path.basename(filePath)
console.log(base)

/*
test.txt
*/

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)

/*
C:\Users\PURUSHOR\nodejstutorial\content\subfolder\test.txt
*/

const {readFileSync} = require('fs')
const {writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first, second)
/*
hello this is first text file
 hello this is second text file
*/


writeFileSync('./content/result-sync.txt', 
              `Here is the result ${first}, ${second}`)
/* the content if present then it will get overwritten so we can use
   flag option to append

writeFileSync('./content/result-sync.txt', 
              `Here is the result ${first}, ${second}`, 
              {flag: 'a'})

*/