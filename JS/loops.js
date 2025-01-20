for (let i = 0; i < 5; i++) {
  console.log(`${i}`);
}

let count = 0;
while (count <= 10) {
  console.log(count);
  count++;
}

num = 5;
do {
  console.log(num);
  num--;
} while (num > 0);

let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  if (fruit === "banana") continue;
  console.log(fruit);
}

let fullName = "aditya parmar";
for (let name of fullName) {
  if (name === " ") {
    break;
  }
  console.log(name);
}

let person = { name: "Aditya", age: 30, city: "New York" };
for (let key in person) {
  console.log(`${key} : ${person[key]}`);
}

// for of cannot be use for object as object are not iterable

// for (let keys of person) {
//   console.log(`${keys} : ${person[keys]}`);
// }

// if want to use for of with object then use Object.keys() becz Object.keys return an array of keys in objects
for (let key of Object.keys(person)) {
  console.log(`${key}: ${person[key]}`);
}

// for in with array will work but will return index of array elements

for (let index in fruits) {
  console.log(`${index} : ${fruits[index]}`);
}


const asyncIterable = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
];


(async () => {
for await (const value of asyncIterable){
  console.log(value)
}
})();

// for await(const value of asyncIterable){
//   console.log(value)
// }