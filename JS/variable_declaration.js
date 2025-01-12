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
