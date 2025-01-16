//1) forEach
const numbers = [1, 2, 3, 4];
numbers.forEach((num) => console.log(num * 2));

//2) indexOf
const arr1 = [2, 4, 6, 10, 8];
// use strict equality
console.log(arr1.indexOf(10));

// 3) lastIndexOf
const arr2 = [5, 3, 7, 3, 2, 3];
console.log(arr2.lastIndexOf(3));

// 4) includes
// use strict equality
console.log(arr2.includes(3));

const names = ["Aditya", "Parmar", "Jayantilal", "Usha", "Archita"];
console.log(names.includes("Parmar"));

// 5) find
const arr3 = [10, 20, 40, 80, 90];

// find will return first element only which satisfied the test function
const res = arr3.find((num) => num > 20);
console.log(res);

// 6) findIndex

// find is use to find specific element/term and findIndex is use when you need to use any condition in order to check for that element present in array or not

// will return INDEX for the element which satisfaied the condition
const index = arr3.findIndex((num) => num > 50);
const resIndex = names.findIndex((nam) => nam === "Usha");
console.log(resIndex);

// 7) filter

// will return all element which satisfied the test function
const arr4 = [3, 5, 7, 15, 20];
const filtered = arr4.filter((num) => num >= 10);
console.log(filtered);

// 8) map

// will return new array with element which satisfied the test condition
const triple = arr1.map((num) => num * 3);
const double = arr1.map((num) => {
  return num * 2;
});
const resName = names.map((nam) => nam >= "I");
console.log(double);

// 9) sort

//inline array sort
const arr5 = [5, 1, 8, 5, 9, 0, -1];
arr5.sort((a, b) => a - b);
console.log(arr5);

// 10) reverse
arr5.reverse();
console.log(arr5);

// 11) split
const str = "I am, Aditya Parmar, from socialpilot";

//convert string into array
console.log(str.split(","));

// 12) join
const tech = ["React", "Node", "MongoDB"];
const resTech = tech.join(", ");
console.log(resTech);

// 13) reduce
const sum = arr1.reduce((acc, num) => acc + num, 0);
console.log(sum);

// 14) reduceRight
const sum2 = arr1.reduceRight((acc, num) => acc - num, 0);
console.log(sum2);

// 15) some

//will check if there any element which satisfied the givin condition ( any one elememt or first element get satisfied then it will stop there)
const arr6 = [2, 4, 7, 5, 8, 9, 3, 1, 0, -1, -2, -3, -8];
const hasEven = arr6.some((num) => num % 2 == 0);
const hasOdd = arr6.some((num) => num % 2 !== 0);

console.log(hasEven, hasOdd);

// 16) every
const arr7 = [2, 4, 7, 5, 8, 9, 3, 1, 0, -1, -2, -3, -8];

// unless every element get match/satisfied condition then only it will return true else false if any one gets false
const hasEven2 = arr6.every((num) => num % 2 == 0);
const hasOdd2 = arr6.every((num) => num % 2 !== 0);

console.log(hasEven2, hasOdd);

// 17) groupby

const arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const grouped = Object.groupBy(arr8, (num) => (num % 2 === 0 ? "even" : "odd"));

console.log(grouped);

// 18) Flat
const arr = [1, [2, 3], [4, 5]];

//convert nested array into one array
const flatArr = arr.flat();
console.log(flatArr);

// 19) unshift and shift
const arr9 = [1, 2, 3, 4, 0, 100, 12000, 200];
arr9.unshift(-1);
arr9.shift(200);

// 20) push and pop
const leng = arr9.push(900);
console.log(leng);
arr9.pop();
