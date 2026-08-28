// Destructuring --> object/Array

const user = {
    name: "Omor",
    age: 8,
    city: "Chattogram"
}

// const names = user.name
// const age = user.age
// const city = user.city

const {name:userName, age, city} = user;  // Destructuring 

const num = [10, 20, 30, 40, 50];

// const first = num[0];
// const second = num[1];

const [first, second] = num;   // Destructuring 



// spread oparetor
const arr = [1,2,3,4,5];
const newArr = [...arr]  // spread


const userOmor = {
    name: "Omor",
    age: 8,
    city: "Chattogram"
}

const newUserOmor = {...userOmor}// spread
const newUserOmor2 = {...userOmor, class: 4} // spread & adding


// methods- filter(), find(), includes()
// filter() => delete
// find() => find out a specific data/things
// map() => showing data on the ui
// includes()  => a data is in a array or not

const numbers = [12,4,56,87,89,90];

const filtering = numbers.filter(num => num % 2 === 0)
// console.log(filtering);
const maping = numbers.map(num => num+1)

const finding = numbers.find(num1 => num1 + 6 === 10);
// console.log(finding);

const string = "I have no time today to practice"
// console.log(string.includes("no time"));


// turnury oparetor
const student = true;
const result = student === true ? "You can go" : "You can't go"
// console.log(result);


// Logical && operator

const food = "briyany"
const drinks = "lemon juice"
if (food === "briyany" && drinks === "lemon juice"){
    // console.log("I wanna to eat");
}
else{
    // console.log("I dont wanna eat");
}


// optional chaining
const user1 = {
    name: "Omor",
    class: 4
}
// console.log(user1?.age);


// Nullish Coalescing
// Nullish Coalescing is used for only (null) & (undefined)
const foodLunch = null;

// if (foodLunch === "briyany"){
//     console.log("eating");
// }
// else{
//     console.log("no eat");
// }

console.log(foodLunch ?? "no eat");  // Nullish Coalescing


// Promise
// Promise --> fullfilled or reject

const promise = new Promise((resolve, reject) => {
    const resulting = true

    if (resulting) {
        resolve("I have data!")
    }
    else{
        reject("Error!")
    }
})

promise.
then((items) => {
    console.log(items);
})
.catch(err => {
    console.log(err);
})