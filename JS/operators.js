console.log("--- Arithmetic Operators---");

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);

//increment and decrement operator

let x = 5;

console.log(x++); //5 assign to x then increment to 6
console.log(++x); //6 incrment to 7 then assign to x
console.log(x--); //7 assign to x then decrement to 6
console.log(--x); //6 decrement to 5 then assign to x

console.log("---Assignment Operators---");

let num = 10;
num += 12; // num = num + 12
console.log(num);
num /= 6; // num = num / 6
console.log(num);

console.log("---Comparison Operators---");
let q = 20;
let p = "20";

console.log(q == p);
console.log(q === p);
console.log(q != p);
console.log(q !== p);
console.log(q > p);
console.log(q < p);
console.log(q >= p);
console.log(q <= p);

console.log("---Logical Operators---");

let age = 25;
let isStudent = false;

console.log(age > 18 && isStudent);
console.log(age > 18 || isStudent);
console.log(!isStudent);

console.log("---Bitwise  Operators---");
let e = 5;
let f = 3;
console.log(e & f); // BITWISE AND
console.log(e | f); // BITWISE OR
console.log(e ^ f); // BITWISE XOR

console.log(e << 1); // mul by 2
console.log(e >> 1); // divd by 2
console.log(e >> 2); // mul by 4
console.log(e << 2); // divd by 4

console.log("---Ternary Operators---");
let numb = 7;
console.log(num % 2 == 0 ? "even" : "odd");

console.log("---typeof Operators---");

console.log(typeof 42);
console.log(typeof "hello");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null); // type of null is object

class person {}
let adi = new person();
console.log(adi instanceof person); // is adi object of person class

console.log("---Nullish Operators---");
let value = null;
// value = 25;
// if value is null then it will not throw error rather will return the default value
console.log(value ?? "Default Value");

console.log("---Optinal Chaining Operators---");
let user = {
  profile: {
    name: "Aditya Parmar",
  },
};

console.log(user.profile.name);
//without ? it will throw error
console.log(user.profile.age);

//with ? it will return undefined
console.log(user.profile?.age);

let obj = {
  greet: () => "hello",
};
console.log(obj.greet?.());

// will trow error as Goodby function does not exists
// console.log(obj.Goodby());
console.log(obj.Goodby?.());

console.log("---Spread Operators---");
let arr1 = [1, 2, 3];
let arr2 = [7, 8, 9, 11, 100];

// will return arr contain 2 arr that is arr1 and arr2
console.log([arr1, arr2]);

// will return arr which contain element of arr1 and arr2
console.log([...arr1, ...arr2]);

let str = "42";
console.log(+str); // convert string to number

let test = (1, 2, 43);
console.log(test); // will return last element
