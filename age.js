const currentYear = 2021 
const birthYear = 1990
const age = currentYear - birthYear
const name = "Hanna"
//console.log(name, age) // console.log (name) console.log(age)
const message = name + " is " + age + " years old "
// const message = name + age + age + " years old "
// const message = age + age + " years old "
//console.log(message)

const cm = 20
const inches = cm / 2.54
console.log(inches)
console.log(Math.round(inches))

const height = 200
const weight = 90
const bmi = weight / height / height * 1000
console.log(bmi)

//const longerWelcomeMessage = "Hej, radbrytning \n Det här syns på andra raden"
//console.log(longerWelcomeMessage)

//Booleans
const isProgrammingBoring = false
const doesProgrammingRequireHardWork = true

//null and undefined
let theFuture
//console.log(theFuture)
//const somethingsAreValueLess = null
//console.log(somethingsAreValueLess)

const array = ['Poke Bowl', 'Macka', 'Omelett', 'Vårrullar']
//console.log(array)
//console.log(array[1])
//console.log(array.length)
//console.log(array[array.length-1])
array.push("Äpple")
//console.log(array)
//console.log(array.indexOf("Omelett"))

const a = 2
const b = "2"

//console.log(a == b)
//console.log(a === b)

const x = 3
const y = 5
const z = 3

//console.log(y > x)
//console.log(y >= z)

//console.log(true && true)
//console.log(true && false)
//console.log(false && false)

age1 = 13

console.log(true || true)
console.log(true || false)
console.log(false || false)

const isTeen = age1 >12 && age1 < 20;
/*console.log(isTeen)

if (isTeen){
    console.log("Tonåring")
} else{
    console.log("Inte tonåring")
}

if(age1 < 25 || age1 > 63){
    console.log("Lägre arbetsgivaravgift")
} else{
    console.log("Vanlig arbetsgivaravgift")
}
*/

//if(!isTeen) {
//   console.log("Inte tonåring")
//}

//const favoriteDrink = "Coffee"
//const message1 = `Your favorite drink is ${favoriteDrink}`
//console.log(message1)

let coronaYear = 2020;
coronaYear++;
console.log(coronaYear);

const user1 = {
    age: 32,
    birthYear: 1989,
    name: {
        firstName: "Hanna",
        lastName: "Tylna:"
    },
    isTeacher: true
};

const user2 = {
    age: 40,
    birthYear: 1981,
    name: {
        firstName: "John",
        lastName: "Doe:"
    },
    isTeacher: false
};

console.log(user.name.firstName)

const user1Array = [32, 1989, "Hanna", "Tylna", true]

console.log(user1, user2);