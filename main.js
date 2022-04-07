// import express (library for creating web servers)
import express from 'express'
// import dependencies and create __dirname (needed because esm module)
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

//initialize express app
const app = express()
const port = 3000;

// create base route and respond to request with index.html (__dirname points to current directory)
app.get('/', function(req, res) {
    res.sendFile(`${__dirname}/index.html`)
})

// listen on given port, then execute callback log function
app.listen(port, function() {
    console.log(`web server running on localhost:${port}`)
})
