var name = "Aditya";
let lastName = "parmar";
const FullName = "aditya Parmar";

function printName() {
  var age = 21;
  let id = 374;
  const college = "BVM";

  console.log("-----Globle Scope--------");
  console.log(name);
  console.log(lastName);
  console.log(FullName);
  console.log(age);

  console.log("-----Local Scope--------");
  console.log(id);
  console.log(college);

  console.log("-----Reassing and Redclare--------");

  // let and const can reassign and redclare
  var age = 20;
  id = 437;
  name = "Adi";
  lastName = "Jayantilal parmar";

  //const cannot reassign and redclare
  //   college = "MSU";

  console.log(age);
  console.log(id);
  console.log(lastName);
  console.log(name);

  let z = 50;

  //cannot redclare let variable
  // let z = 55;

  //can redclare var variable
  var age = 25;
  console.log(age);
}
printName();

function checkScope() {
  //local scope cannot be access outside the its block
  //   console.log(age);
  //   console.log(id);
  //   console.log(college);

  //global scope access and with new assign value for variable "name" at line 25
  console.log(name);
}

checkScope();

function hostVariable() {
  console.log(a);
  console.log(b);
  console.log(c);

  // var variable will be hosted . Let and const will not be hosted
  var a = 10;
  let b = 20;
  let c = 30;
}

hostVariable();
