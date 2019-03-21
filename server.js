const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const hallArray = [
  {id:1, name: "Velika sportska dvorana", reservation: {isReserved: true, reservedFrom: '2019-03-02T23:00:00.000Z', reservedUntill: '2019-03-30T23:00:00.000Z'}},
  {id:2, name: "Dvorana Hrvatskog doma", reservation: {isReserved: true, reservedFrom: '2019-04-02T23:00:00.000Z', reservedUntill: '2019-04-30T23:00:00.000Z'}},
  {id:3, name: "Dvorana Gradske knjižnice", reservation: {isReserved: false, reservedFrom: null, reservedUntill: null}},
  {id:4, name: "Dvorana TIC (Turistički dom)", reservation: {isReserved: false, reservedFrom: null, reservedUntill: null}},
  {id:5, name: "Konferencijske dvorane RCTP (Razvojni centar i tehnološki park)", reservation: {isReserved: false, reservedFrom: null, reservedUntill: null}}
];

const hallNames = [
  "Velika sportska dvorana",
  "Dvorana Hrvatskog doma",
  "Dvorana Gradske knjižnice",
  "Dvorana Gradske knjižnice",
  "Konferencijske dvorane RCTP (Razvojni centar i tehnološki park)"
]

const hallNamesString = "Velika sportska dvorana, Dvorana Hrvatskog doma, Dvorana Gradske knjižnice, Dvorana Gradske knjižnice, Konferencijske dvorane RCTP (Razvojni centar i tehnološki park)"

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(hallNamesString);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
