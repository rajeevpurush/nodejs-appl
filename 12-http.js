const http = require('http')
const server = http.createServer((req, res) => {
    if(req.url == '/') {
        res.end('Welcome to our home page')
    } 
    if(req.url == '/about') {
        res.end('Here is about our company')
    } 
    res.end(`
        <h1> Ouch !! </h1>
        <p> Could not find the page you requested for. Sending you back to home page </p>
        <a href = "/"> back to home </a>
    `)

    
})

server.listen(5000)

