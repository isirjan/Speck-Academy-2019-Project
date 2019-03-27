const http = require('http');

const _ = require('lodash');

const halls = require('./halls.js');

const hallNamesArray = _.map(halls.hallArray, 'name');

const hallUniqueNamesArray = _.uniq(hallNamesArray);

const hallUniqueNamesString = _.join(hallUniqueNamesArray, ", ");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(hallUniqueNamesString);
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
