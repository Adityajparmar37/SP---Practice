// // // const { default: axios } = require("axios");

// // // // let promise1 = new Promise((res, rej) => {
// // // //     res("Hello");
// // // // })

// // // // let promise2 = new Promise((res, rej) => {
// // // //     setTimeout(() => {
// // // //         res("World")
// // // //     },2000)
// // // // })

// // // // let promise3 = new Promise((res, rej) => {
// // // //     setTimeout(() => {
// // // //         res("How are you")
// // // //     },3000)
// // // // })

// // // // promise1.then((value) => {
// // // //     console.log(value);
// // // //     return promise2;
// // // // }).then((value) => {
// // // //     console.log(value);
// // // //     return promise3
// // // // }).then((value) => {
// // // //     console.log(value);
// // // // }).catch((error) => {
// // // //     console.log(error)
// // // // })



// // // // const promises = [promise1, promise2, promise3];

// // // // const executePromisesSequentially = async () => {
// // // //     const res = await promises.reduce(async (acc, curr) => {
// // // //         const prevProm = await acc;
// // // //         return [...prevProm, await curr];
// // // //     }, Promise.resolve([]));

// // // //     console.log(res);
// // // // }

// // // // executePromisesSequentially()


const apiUrls = [
  "https://dummyjson.com/users",
  "https://dummyjson.com/products",
  "https://dummyjson.com/posts"
];

// // // // function fetchApi(url) {
// // // //   return fetch(url).then(response => {
// // // //     if (!response.ok) {
// // // //       throw new Error(`Failed to fetch ${url}`);
// // // //     }
// // // //     return response.json();
// // // //   });
// // // // }


// // // // async function executeAPISeq(apiURL) {
// // // //     async function performPromise() {
// // // //         const p = apiURL.shift();
// // // //         // console.log(p);
// // // //         if (p != null) {
// // // //             await p;
// // // //             await p.then(()=>performPromise())
// // // //         }
// // // //     }
// // // //     await performPromise();
// // // // }





// // // // let p1 = axios.get("https://dummyjson.com/users").then(data => console.log("user"))
// // // // let p2 = axios.get("https://dummyjson.com/products").then(data => console.log("products"))

// // // // let p3 = axios.get("https://dummyjson.com/post").then(data => console.log("post"))

// // // // let result = executeAPISeq([p1, p2, p3]);
// // // // // console.log(result)



// // // // async function executeAPISeq(apiURLs) {
// // // //     for (const apiCall of apiURLs) {
// // // //         // Await each API call sequentially
// // // //         await apiCall;
// // // //     }
// // // // }

// // // // const p1 = axios.get("https://dummyjson.com/users").then(data => console.log("user"));
// // // // const p2 = axios.get("https://dummyjson.com/products").then(data => console.log("products"));
// // // // const p3 = axios.get("https://dummyjson.com/posts").then(data => console.log("post"));

// // // // // Execute the API calls in sequential order
// // // // executeAPISeq([p1, p2, p3]);



// // // // function createPromise(api) {
// // // //     return new Promise((res, rej) => {
// // // //         console.log(api);
// // // //         res(api);
// // // //     })
// // // // }

// // // // function executeAPISeq(apiArr) {
// // // //     return createPromise(apiArr.shift()).then(last=>apiArr.length===0? last : executeAPISeq(apiArr))

// // // // }

// // // // executeAPISeq(apiUrls)



apiUrls.reduce((promises, currUrl) => {
    return promises.then(() => fetch(currUrl).then(()=> console.log(`${currUrl} called`)))
}, Promise.resolve()).then(() => console.log("ALL API RESOLVE"));

// apiUrls.reduce(async (promises, currUrl) => {
//     await promises;
//     return apiCalls(currUrl);
// }, Promise.resolve()).then(() => console.log("ALL API RESOLVE"));


// // let p = Promise.resolve();

// // apiUrls.forEach((element) => {
// //     return p.then(()=>apiCalls(element))
// // })
// // p.then(() => console.log("end"));


// //  apiUrls
// //     .reduce((promiseChain, apiUrl) => {
// //       return promiseChain.then(() => apiCalls(apiUrl));
// //     }, Promise.resolve())
// //     .then(() => {
// //       console.log("All APIs called sequentially.");
// //     });



const apiCalls = (url) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(`api call ${url}`);
            res(`api response ${url}`)
        },1000)
    })
}


