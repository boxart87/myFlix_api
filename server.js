const http = require('http'),
    url = require('url'),
    fs = require('fs');

http.createServer((request, response) => {
    var addr = request.url,
        q = url.parse(addr, true);
    filepath = '';

    if (q.pathname.includes('documentation')) {
        filepath = (__dirname + '/documentation.html');
    } else {
        filepath = 'index.html';
    }

    fs.appendFile('log.txt', 'URL: ' + addr + '\nTimestamp: ' + new Date() + '\n\n', function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Added to log.');
        }
    });

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello Node!\n');
}).listen(8080);

