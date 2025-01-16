//import fs from "fs";
const http = require("http");
const { default: axios } = require("axios");
const fs = require("fs");
console.log("Start");

axios
  .get("https://dummyjson.com/products/?delay=0")
  .then(() => console.log("Axios CallBack"));

setTimeout(() => {
  console.log(`Inside SetTimeout callback`);
}, 0);

let count = 0;
const id = setInterval(() => {
  if (count <= 0) {
    console.log("Inside SetInterval");
    clearTimeout(id);
  }
  count++;
}, 0);

fetch("https://dummyjson.com/products/?delay=0")
  .then(() => console.log("Fetch Callback"))
  .finally(() => {
    console.log("Finally");
  });

http
  .get("http://dummyjson.com/test", (resp) => {
    console.log("Inside HTTP");
    let data = "";

    // A chunk of data has been received.
    resp.on("data", (chunk) => {
      console.log("HTTP data");
    });

    // The whole response has been received.
    resp.on("end", () => {
      console.log("HTTP Request done");
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });

fs.readFile("./Read.txt", "utf-8", (err, data) => {
  console.log("Data");
});

new Promise((res, rej) => {
  console.log("Inside Promise");
  res("Promise 1 completed");
}).then((value) => console.log(value));

// new Promise((res, rej) => {
//   console.log("Inside Promise 2");
//   axios
//     .get("https://dummyjson.com/products/?delay=1000")
//     .then(() => console.log("axios"));
//   res("Res");
// }).then(() => console.log("Promise 2 completed"));

// 1st  -> Synchornous code

// 2nd -> Promises

// 3td -> setTimout  and setInterval ( depends on time to delay)

// 4th -> Poll (HTTP, I/O)

// 5th-> Fetch / axios ( depends on time to get data , in general fetch is done first and then axios )
