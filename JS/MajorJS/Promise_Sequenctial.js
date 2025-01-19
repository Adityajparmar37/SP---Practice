const { default: axios } = require("axios");

// let promise1 = new Promise((res, rej) => {
//     res("Hello");
// })

// let promise2 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("World")
//     },2000)
// })

// let promise3 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("How are you")
//     },3000)
// })

// promise1.then((value) => {
//     console.log(value);
//     return promise2;
// }).then((value) => {
//     console.log(value);
//     return promise3
// }).then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log(error)
// })



// const promises = [promise1, promise2, promise3];

// const executePromisesSequentially = async () => {
//     const res = await promises.reduce(async (acc, curr) => {
//         const prevProm = await acc;
//         return [...prevProm, await curr];
//     }, Promise.resolve([]));

//     console.log(res);
// }

// executePromisesSequentially()


const apiUrls = [
  "https://dummyjson.com/users",
  "https://dummyjson.com/products",
  "https://dummyjson.com/posts"
];

// function fetchApi(url) {
//   return fetch(url).then(response => {
//     if (!response.ok) {
//       throw new Error(`Failed to fetch ${url}`);
//     }
//     return response.json();
//   });
// }

// function executeSequentially(apiUrls) {
//   return apiUrls.reduce((promise, url) => {
//     return promise.then(results =>
//       fetchApi(url).then(result => [...results, result])
//     );
//   }, Promise.resolve([]));
// }

// executeSequentially(apiUrls)
//   .then(results => {
//     console.log("All API calls completed:", results);
//   })
//   .catch(error => {
//     console.error("An error occurred:", error);
//   });

// async function executeAPISeq(apiURL) {
//     async function performPromise() {
//         const p = apiURL.shift();
//         // console.log(p);
//         if (p != null) {
//             await p;
//             await p.then(()=>performPromise())
//         }
//     }
//     await performPromise();
// }





// let p1 = axios.get("https://dummyjson.com/users").then(data => console.log("user"))
// let p2 = axios.get("https://dummyjson.com/products").then(data => console.log("products"))

// let p3 = axios.get("https://dummyjson.com/post").then(data => console.log("post"))

// let result = executeAPISeq([p1, p2, p3]);
// // console.log(result)



// async function executeAPISeq(apiURLs) {
//     for (const apiCall of apiURLs) {
//         // Await each API call sequentially
//         await apiCall;
//     }
// }

// const p1 = axios.get("https://dummyjson.com/users").then(data => console.log("user"));
// const p2 = axios.get("https://dummyjson.com/products").then(data => console.log("products"));
// const p3 = axios.get("https://dummyjson.com/posts").then(data => console.log("post"));

// // Execute the API calls in sequential order
// executeAPISeq([p1, p2, p3]);



function createPromise(api) {
    return new Promise((res, rej) => {
        console.log(api);
        res(api);
    })
}

function executeAPISeq(apiArr) {
    return createPromise(apiArr.shift()).then(last=>apiArr.length===0? last : executeAPISeq(apiArr))

}

executeAPISeq(apiUrls)