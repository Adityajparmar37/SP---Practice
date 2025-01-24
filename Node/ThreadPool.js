const crypto = require("crypto");

// console.log("start")
// const start = Date.now();

// // as Sync has it will block futher code
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log("Hashed: ", Date.now() - start)
// console.log("end");






// //(WHEN YOU DO NOT INCREASE DEFUALT THREAD NUMBER)
// // default number of thread  = 4 ( 1 per core), if more then it will do first 4 then next 4 then next 4 like that
// const MAX_CALLS = 16;

// console.log("start");

// const start = Date.now();
// for (let i = 0; i < MAX_CALLS; i++){

//     //It will run on a separate thread in libuv 's thread pool

//     crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//         console.log(`Hashed: ${i + 1}`, Date.now() - start);
//     });
// }

// console.log("end");






// // default number of thread = 4 (1 per core) , if more then it will be equally distribute eg 16 -> then 16/4 -> 4 thread in each core

// // Increaseing thread pool can help with performace but that it limited by the number of avaiable cpu cores

// //CPU BOUND TASK HENCE need to divide in thread
// process.env.UV_THREADPOOL_SIZE = 8;
// const MAX_CALLS = 8;

// console.log("start");
// const start = Date.now();
// for (let i = 0; i < MAX_CALLS; i++){

//     //It will run on a separate thread in libuv 's thread pool

//     crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//         console.log(`Hashed: ${i + 1}`, Date.now() - start);
//     });
// }
// console.log("end");




// // NON CPU BOND TASK , hence it will take almost (approx) same time to call request

// const https = require('https');
// const start = Date.now();
// for (let i = 0; i < MAX_CALLS; i++){
//     https.request("https://www.google.com", (res) => {
//         res.on("data", () => { });
//         res.on("end", () => {
//             console.log(`Request: ${i + 1}`, Date.now() - start);
//         });
//     }).end();
// }

