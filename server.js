const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/url/task') {
        fs.readFile('task.html', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else if (req.url === '/api/getDynamicData') {
        const dynamicData = { dynamicData: 'Hello from Dynamic Data!' };
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(dynamicData));
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});

server.listen(8000, () => {
    console.log('Server is listening on port 8000');
});
