// create web server
// 1. create server
// 2. listen to requests
// 3. handle requests
// 4. send response

// 1. create server
// 2. listen to requests
// 3. handle requests
// 4. send response

// 1. create server
const express = require('express');

// 2. listen to requests
const app = express();

// 3. handle requests
app.get('/', function(req, res) {
    res.send('Hello World');
});

// 4. send response
app.listen(3000, function() {
    console.log('Server is running on port 3000');
});