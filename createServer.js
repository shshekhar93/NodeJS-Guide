const http = require('http');
const fs = require('fs');

function onRequest(req, res) {
    console.log('Request path:', req.url);

    // const htmlString = fs.readFileSync(__dirname + '/index.html', 
    //     'utf8');

    // fs.readFile(__dirname + '/index.html', 'utf8', 
    //     function(err, htmlString) {
    //         console.log('readFile callback called');
    //         if(err) {
    //             res.end('An error occured');
    //         }
    //         else{
    //             res.end(htmlString);
    //         }
    // });

    const stream = fs.createReadStream(__dirname + '/index.html', 
        'utf8');

    stream.pipe(res);
}

const server = http.createServer(onRequest);
server.listen(8000);
