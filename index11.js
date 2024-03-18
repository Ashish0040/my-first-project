var age = 25;
let name = "ASHISH";
const PI = 3.14;

console.log(age); // 25
console.log(name); // ASHISH
console.log(PI); // 3.14
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

function greet(person) {
    console.log("Hello, " + person + "!");
}

greet("ASHISH"); // Hello, ASHISH!