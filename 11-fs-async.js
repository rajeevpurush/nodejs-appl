
const {readFile, writeFile} = require('fs')


/* Synchronous Call back approach

After the function is executed, the callback will be called
with err and result

*/

console.log("start")
readFile('./content/first.txt', 'utf-8', (err, result) => {
  if(err) {
    console.log(err)
  }
  const first = result
  console.log(first)
  readFile('./content/second.txt', 'utf-8', (err, result) => {
    if(err) {
      console.log(err)
    }
    const second = result
    console.log(second)
    console.log("Hello")

    writeFile(
      './content/resul-async.txt', 
      `Here is the result : ${first}, ${second}`,
    (err, result)=> {
      if (err) {
        console.log(err)
        return;
      }
      console.log('done with this task')
    })  
  })
}) 
console.log('Starting with the next task')


/*
PS C:\Users\PURUSHOR\nodejstutorial> node .\11-fs-async.js
start
Starting with the next task

hello this is second text file

Hello
done with this task


Notes:
1) Here we can notice that while the fist task is being started the 
next task is being handled. 
This way it can handle multiple tasks in parallel

2) But here the code is messy and are embedded each callback within each
   other - number of calls can be limitation
   
   Another approach is using 
   a) promises, and 
   b) async wait - easier to work with

*/

