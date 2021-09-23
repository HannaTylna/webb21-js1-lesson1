/*const brand = "Audi"
const modelYear =  2000
const model = "A3"
const currentMileage = 8000
const bigServiceMileage = 6000
*/

let car = {
    brand: "Audi",
    modelYear: 2000,
    model: "A3",
    currentMileage: 8000,
    bigServiceMileage: 6000
};
car.owner = "asdf";
const message = `Your own a ${car.brand} ${car.model} that has been driven for ${car.currentMileage}km`;

console.log(message);

if(car.currentMileage > car.bigServiceMileage){
    console.log("Time for big service")
}