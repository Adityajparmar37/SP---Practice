function sum(...numbers) {
    return numbers.reduce((curr, acc) => curr + acc, 0);
}

console.log(sum(1, 2, 3, 4));

const obj1 = { name: "Aditya" }
const obj2 = { age: 21 }
const combine = { ...obj1, ...obj2 }
console.log(combine)