const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('this is our home page')
        // res.end();
    }
    if (req.url === '/about') {
        res.end('this is our about page')
        // res.end();
    }
    // res.write('welcome to our home page')
    res.end(`
    <h1>OOP's!</h1>
    <h3>you are getting wrong url please back home</h3>
    <a href ='/'>back home </a>
    `);
})

server.listen(5000)