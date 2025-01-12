console.log("---Conditional Statement---");

let year = 2024;
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log("Leap Year");
    } else {
      console.log("not a leap year");
    }
  } else {
    console.log("Leap Year");
  }
} else {
  console.log("not a leap year");
}

let num1 = 5;
let num2 = 6;
let oper = "*";

switch (oper) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;

  case "/":
    console.log(num1 * num2);
    break;

  case "*":
    console.log(num1 * num2);
    break;

  default:
    console.log("Invalid Operator");
}

let marks = 85;
let grade = marks >= 90 ? "A" : marks >= 75 ? "B" : marks >= 55 ? "C" : "Fail";

console.log(grade);
