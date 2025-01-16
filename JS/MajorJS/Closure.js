// let b = 80;

// function x() {
//   let a = 7;
//   function y() {
//     console.log(a);
//     console.log(b);
//   }
//   return y;
// }

// const z = x();
// z();

function counter(value, Step) {
  let temp = value;
  return function () {
    // debugger;
    temp = temp + Step;
    console.log(temp);
  };
}

// const count = counter(10, 2);
// count();
// count();
// count();
// count();

// for (let i = 0; i < 5; i++) {
//   const timer = setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

//let i = 0
//let i = 1
//let i = 2
//let i = 3
//let i = 4

// var i = 4
for (var i = 0; i < 5; i++) {
  const timer = setTimeout(function () {
    console.log(i);
  }, i*1000);
  console.log("timer", timer);
}
