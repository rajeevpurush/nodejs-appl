// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (Mac)

// package.json - manifest file that stores important info about project/package
// Manual approach - create package.json in the root, create properties etc
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// example of running npm init (or npm init -y)
// package.json file gets created with the following values
//  {
//    "name": "nodejstutorial",
//    "version": "1.0.0",
//    "description": "",
//    "main": "1-app-with-custom-module.js",
//    "scripts": {
//      "test": "echo \"Error: no test specified\" && exit 1"
//    },
//    "keywords": [],
//    "author": "",
//    "license": "ISC"
//  }
//  When you install a first package 
// PS C:\Users\PURUSHOR\nodejstutorial> npm install lodash
// npm notice created a lockfile as package-lock.json. You should commit this file.
// npm WARN nodejstutorial@1.0.0 No description
// npm WARN nodejstutorial@1.0.0 No repository field.
// 
// + lodash@4.17.21
// added 1 package from 2 contributors and audited 1 package in 1.703s
// found 0 vulnerabilities
//
// The package name and version get entered in the package.json 
// directory node_modules gets created where the package information (libs)
// gets stored


// Note, if you install a package that require other packages it would 
// automatical the dependent packages too.
//