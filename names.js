const secret = 'SUPER SECRET'

const john = 'john'
const peter = 'peter'

// Approach 3: exports
// Make variables john and peter available to other files
module.exports = {john, peter}
//console.log(module)

/* before module.export was called :
PS C:\Users\PURUSHOR\nodejstutorial> node names
Module {
  id: '.',
  path: 'C:\\Users\\PURUSHOR\\nodejstutorial',
  exports: {},
  parent: null,
  filename: 'C:\\Users\\PURUSHOR\\nodejstutorial\\names.js',
  loaded: false,
  children: [],
  paths: [
    'C:\\Users\\PURUSHOR\\nodejstutorial\\node_modules',
    'C:\\Users\\PURUSHOR\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules'
  ]
}

After : module.export = {john, peter}

PS C:\Users\PURUSHOR\nodejstutorial> node names
Module {
  id: '.',
  path: 'C:\\Users\\PURUSHOR\\nodejstutorial',
  exports: { john: 'john', peter: 'peter' },
  parent: null,
  filename: 'C:\\Users\\PURUSHOR\\nodejstutorial\\names.js',
  loaded: false,
  children: [],
  paths: [
    'C:\\Users\\PURUSHOR\\nodejstutorial\\node_modules',
    'C:\\Users\\PURUSHOR\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules'
  ]
}


  Here we can the variable that are visible outside this file. This is 
  how we can use modules allow selective sharing

  */
