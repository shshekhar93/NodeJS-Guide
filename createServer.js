const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

// number1
// =100&
// number2=500

// requestBody === 'number1=100&'
function compute(req, res) {
    const contentLength = parseInt(req.headers['content-length']);
    let requestBody = '';
    req.on('data', function(chunk) {
        requestBody = requestBody + chunk.toString();

        if(requestBody.length >= contentLength) {
            // okay entire request is parsed now.
            // Start processing.
            const bodyObj = querystring.parse(requestBody);
            const number1 = parseFloat(bodyObj.number1);
            const number2 = parseFloat(bodyObj.number2);
            const result = number1 + number2;
            res.end(result.toString());
        }
    });
}

function onRequest(req, res) {
    console.log('Request path:', req.url);
    const urlParts = url.parse(req.url);
    
    if(urlParts.pathname === '/') {
        const stream = fs.createReadStream(__dirname + '/index.html', 
        'utf8');
        stream.pipe(res);
    }
    else if(urlParts.pathname === '/add') {
        const stream = fs.createReadStream(__dirname + '/add.html', 
        'utf8');
        stream.pipe(res);
    }
    else if(urlParts.pathname === '/add/compute') {
        compute(req, res);
    }
    else {
        const stream = fs.createReadStream(__dirname + '/404.html', 
        'utf8');
        stream.pipe(res);
    }
}

const server = http.createServer(onRequest);
server.listen(8000);
