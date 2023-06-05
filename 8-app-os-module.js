
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


