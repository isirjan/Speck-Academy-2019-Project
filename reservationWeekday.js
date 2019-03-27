const http = require('http');

const _ = require('lodash');
const luxon = require('luxon');

const dt = luxon.DateTime;

const halls = require('./halls.js');

const reserverdHallsArray = _.filter(halls.hallArray, e => e.reservation.isReserved);

const reservedUntillDate = reserverdHallsArray[0].reservation.reservedUntill.toISOString();

const reservedUntillDateString = dt.fromISO(reservedUntillDate).toFormat("cccc, LLLL d");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write(reservedUntillDateString);
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
