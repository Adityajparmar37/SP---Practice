//1) function declarations
function greet(name) {
  return `My name is ${name}`;
}

console.log(greet("Adity"));

//2) funciton Expressions
const greet = function (name) {
  return `Hello from ${name}`;
};
console.log(greet("Aditya"));

//3) Arrow Function
const FullName = (name) => {
  return `My FullName is ${name}`;
};
console.log(FullName("Aditya"));

const FullName2 = (name) => `My Fullname is ${name}`;

console.log(FullName("Aditya Parmar"));
console.log(FullName2("Aditya Parmar"));

//4) Immediately Invoked Function Expression (IIFE)
(function (name, age) {
  console.log(`Hello Myself ${name} , age is ${age}`);
})(
  "Aditya",
  21
)(
  //with arrow funciton
  (college) => {
    console.log(`My college is ${college}`);
  }
)("BVM");

//5)Asynchronous Functions
async function fetchData() {
  const res = await fetch(`https://api.example.com/data`);
  const data = await res.json();
  return data;
}

fetchData().then((data) => console.log(data));

//7) CallBack Function
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "Aditya" };
    callback(data);
  }, 1000);
}

fetchData((Fun) => {
  console.log(Fun);
});

//8) Higher-order Functions

function highOrderFunction(callback) {
  callback();
}

highOrderFunction(() => {
  console.log("This is a callback Function");
});

function greeting(greet) {
  return function (name) {
    return `${greeting}, ${name}`;
  };
}

const sayHello = greeting("hello");
console.log(sayHello("Aditya"));
