// Code your solution in this file!
const returnFirstTwoDrivers = (func) => {
const first = func.slice(0, 2);
return first;
}

const returnLastTwoDrivers = (func) => {
    const first = func.slice(-2);
    return first;
    }

    const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


   const createFareMultiplier = quad => {

        return function fareMultiplier() {
           return quad * quad;
       };

   }


   function fareDoubler(double) {
    return double * 2;

}

function fareTripler(triple) {

    return triple * 3;
}


function selectDifferentDrivers(drivers, func) {

return func(drivers);

}
