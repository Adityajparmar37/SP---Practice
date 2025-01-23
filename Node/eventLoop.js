// console.log("Start");

// setTimeout(() => {
//     console.log("Time queue")
// },0)

// const timer = setInterval(() => {
//     console.log("setInterval");
// }, 0)
// clearInterval(timer);

// const fs = require('fs');
// fs.readFile("HTTPHeader.txt", (err,data) => {
//     console.log("I/O queue")

//     setImmediate(() => {
//         console.log("check queue");
//     })


//     new Promise((res, rej) => {
//         console.log("Inside Promise ( in FS Fun)");
//         res("Microtask queue: Promise queue ( in FS Fun )")
//     }).then((d)=>console.log(d))


//      process.nextTick(() => {
//         console.log("Microtask queue: process.nextTick inside  ( in FS Fun )");
        
//     })


   
//     console.log(data)
// });

// new Promise((res, rej) => {
//     console.log("Inside Promise ");
//     res("Microtask queue: Promise queue")
// })



// process.nextTick(() => {
//     console.log("Microtask queue: process.nextTick");
// })

// console.log("end")



// // setTimeout(() => {
// //     console.log("settimout 1st");
// // }, 0)
// // setTimeout(() => {
// //     console.log("settimout 2nd ");

// //     process.nextTick(() => {
// //         console.log("Microtask queue: process.nextTick in setTimeout")
// //     })
// // }, 0)
// // setTimeout(() => {
// //     console.log("settimout 3rd");
// // },0)

// // // fs.readFile(__filename, () => {
// // //     console.log("file");
// // // })

// // // const fs = require("fs");

// // // console.log("Start");

// // // fs.readFile("example.txt", () => {
// // //   setTimeout(() => {
// // //     console.log("setTimeout");
// // //   }, 0);

// // //   setImmediate(() => {
// // //     console.log("setImmediate");
// // //   });
// // // });

// // // console.log("End");

  setTimeout(() => {
    console.log("setTimeout");
  }, 0);

  setImmediate(() => {
    console.log("setImmediate");
  });


// --> As SetTimout takes atleast 1ms , even if 0ms is there hence sometime when event loop comes in timer queue it does not find the setTimout callback hence goes to next that is setImmedidate here and excute it , therefore it is not guarantee that settimout or setImmediate which will print first  max(millisecond, interval*)

// // //General Behavior
// // // setImmediate is executed during the check phase of the event loop.
// // // setTimeout is executed during the timers phase of the event loop.
// // // When setTimeout with 0ms Delay Is Used
// // // If both setTimeout(() => {}, 0) and setImmediate(() => {}) are called from the main module (top-level code):

// // // setTimeout may execute first, because the timers phase comes before the check phase in the event loop.
// // // However, when these are triggered within an I/O callback (like fs.readFile), the order is reversed:

// // // setImmediate will execute first, because the event loop directly transitions to the check phase after the I/O phase, skipping the timers phase for that iteration.

