var passengers = [ 
    { name: "Jane Doloop", paid: true },
    { name: "Dr. Evel", paid: true },
    { name: "Sue Property", paid: false },
    { name: "John Funcall", paid: true } 
];



function processPassengers(passengers, testFunction) {
    for (var i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}
function printPassenger(passenger) {
    if (passenger.paid==true) {
        console.log(passenger.name +" has paid")
    }
    else{
        console.log(passenger.name +" has not paid")
    }
}

processPassengers(passengers, printPassenger);

// function checkNoFlyList(passenger) {
//     return (passenger.name === "Dr. Evel");
// }

// function checkNotPaid(passenger) {
//     return (!passenger.paid);
// }

// var allCanFly = processPassengers(passengers, checkNoFlyList);
// if (!allCanFly) {
//     console.log("The plane can't take off: we have a passenger on the no-fly-list.");
// }

// var allPaid = processPassengers(passengers, checkNotPaid);
// if (!allPaid) {
//     console.log("The plane can't take off: not everyone has paid.");
// }