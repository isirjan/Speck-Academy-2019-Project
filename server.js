const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const hallArray = [
  {id:1, name: "Velika sportska dvorana", reservation: {isReserved: true, reservedFrom: new Date('2019-03-02'), reservedUntill: new Date('2019-03-30')}},
  {id:2, name: "Dvorana Hrvatskog doma", reservation: {isReserved: true, reservedFrom: new Date('2019-04-02'), reservedUntill: new Date('2019-04-30')}},
  {id:3, name: "Dvorana Gradske knjižnice", reservation: {isReserved: false, reservedFrom: null, reservedUntill: null}},
  {id:4, name: "Dvorana TIC (Turistički dom)", reservation: {isReserved: false, reservedFrom: null, reservedUntill: null}},
  {id:5, name: "Konferencijske dvorane RCTP (Razvojni centar i tehnološki park)", reservation: {isReserved: false, reservedFrom: null, reservedUntill: null}}
];

function getHallNames () {
  const hallNames = [];
  for (i = 0; i < hallArray.length; i++) {
    hallNames.push(hallArray[i].name);
  }
  return hallNames;
}

function getHallNamesString () {
  const hallNamesString = getHallNames().join(", ");
  return hallNamesString;
}

// function getHallNamesString () {
//   const hallNamesString = '';
//   for (i = 0; i < getHallNames().length; i++) {
//     hallNamesString = getHallNames()[i] + ", ";
//   }
//   return hallNamesString;
// }

// const hallNames = [
//   "Velika sportska dvorana",
//   "Dvorana Hrvatskog doma",
//   "Dvorana Gradske knjižnice",
//   "Dvorana Gradske knjižnice",
//   "Konferencijske dvorane RCTP (Razvojni centar i tehnološki park)"
// ]

// const hallNamesString = "Velika sportska dvorana, Dvorana Hrvatskog doma, Dvorana Gradske knjižnice, Dvorana Gradske knjižnice, Konferencijske dvorane RCTP (Razvojni centar i tehnološki park)"

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(getHallNamesString());
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// z_10 zadatak3
// const halls = 'halls';

// module.exports = {
//   halls
// }