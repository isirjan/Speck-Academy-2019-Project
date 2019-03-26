const hallArray = [
    {id:1, name: "Velika sportska dvorana", reservation: {isReserved: true, reservedFrom: new Date('2019-03-02'), reservedUntill: new Date('2019-05-30')}},
    {id:2, name: "Dvorana Hrvatskog doma", reservation: {isReserved: true, reservedFrom: new Date('2019-04-02'), reservedUntill: new Date('2019-04-30')}},
    {id:3, name: "Dvorana Gradske knjižnice", reservation: {isReserved: false, reservedFrom: null, reservedUntill: null}},
    {id:4, name: "Dvorana TIC (Turistički dom)", reservation: {isReserved: false, reservedFrom: null, reservedUntill: null}},
    {id:5, name: "Velika sportska dvorana", reservation: {isReserved: false, reservedFrom: null, reservedUntill: null}},
];

exports.hallArray = hallArray;