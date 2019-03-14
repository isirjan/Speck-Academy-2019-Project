var hallArray = [
    {id:1, name: "Velika sportska dvorana", reservation: {isReserved: false, reservedFrom: null, reservedUntill: null}},
    {id:2, name: "Dvorana Hrvatskog doma", reservation: {isReserved: false, reservedFrom: null, reservedUntill: null}},
    {id:3, name: "Dvorana Gradske knjižnice", reservation: {isReserved: false, reservedFrom: null, reservedUntill: null}},
    {id:4, name: "Dvorana TIC (Turistički dom)", reservation: {isReserved: false, reservedFrom: null, reservedUntill: null}},
    {id:5, name: "Konferencijske dvorane RCTP (Razvojni centar i tehnološki park)", reservation: {isReserved: false, reservedFrom: null, reservedUntill: null}}
];

function add (Name) {
    var id = Math.round(Math.random()*100);
    // napraviti funkcionalnost za provjeru unesenih ID-a
    hallArray.push({id: id, name: Name, reservation: {isReserved: false, reservedFrom: null, reservedUntill: null}});
};

function remove (id) {
    var pos = 0;
    for (i =0; i < hallArray.length; i++ ) {
        if (hallArray[i].id == id) {
            pos = i;
        };
    };
    hallArray.splice(pos, 1);
};

function reservation (id, reservedFrom, reservedUntill) {
    for (i =0; i < hallArray.length; i++ ) {
        if (hallArray[i].id == id) {
            hallArray[i].reservation.reservedFrom = new Date(reservedFrom);
            hallArray[i].reservation.reservedUntill = new Date(reservedUntill);
        };
    };
};
// reservation(1, "2019, 10, 10", "2018, 10, 22");

function checkReservation (id) {
    for (i =0; i < hallArray.length; i++ ) {
        if (hallArray[i].id == id) {
            reservedUntill = new Date(hallArray[i].reservation.reservedUntill);
            currentTimestamp = new Date();
            if (reservedUntill < currentTimestamp) {
                hallArray[i].reservation.isReserved = false;
                hallArray[i].reservation.reservedFrom = null;
                hallArray[i].reservation.reservedUntill = null;                
            };
        };
    };
};
