// Improved Performance:

// Bluebird is designed to be faster than native promises, especially when handling large numbers of promises. It optimizes the internal workings of promises to reduce overhead.



// Advanced Promise Handling:
// Promise.map(): A faster, more flexible version of Array.prototype.map() that works with promises.
// Promise.each(): Similar to forEach(), but it waits for promises to resolve before moving to the next item.
// Promise.reduce(): Performs a reduce operation with promises, helping to reduce an array of promises into a single value.
// Promise.filter(): Filters a set of promises based on a predicate.
// Promise.all(): Bluebird provides an enhanced version of Promise.all(), which behaves like the native version but with more features (e.g., cancellation).



// Promise Cancellation:
// Bluebird offers promise cancellation, allowing you to cancel ongoing asynchronous operations (like HTTP requests) when they are no longer needed.
// Error Handling:

// Bluebird provides better error handling and debugging tools, which makes tracking down issues with asynchronous code easier.

// Node.js and Browser Support:
// Bluebird works in both Node.js environments and browsers, offering cross-platform compatibility for promise handling.

// Utility Methods for Promises:
// Promise.delay(): Adds a delay before resolving a promise.
// Promise.join(): Waits for multiple promises to resolve and returns an array of results.
// Promise.any(): Resolves when at least one of the provided promises is fulfilled.
// Promisification:

// Bluebird can "promisify" Node.js-style callback APIs, converting callback-based APIs into promise-based APIs. This can help make older code that relies on callbacks work with promises seamlessly.



const Bluebird = require("Bluebird");

// resolve and reject 
// Bluebird.resolve('Resolved Value').then(console.log)
// Bluebird.reject('Error').catch(console.error)

// let promise1 = Bluebird.reject(-1).catch(console.log)
//  promise1 = Bluebird.resolve(1).then(console.log);

// resolve will be overwrite
// const promise2 = Bluebird.resolve(2);
// const promise3 = Bluebird.resolve(3);


// This method takes an array of promises and resolves when all promisesare resolved and rejects if any promise is rejected.
// Bluebird.all([promise1, promise2, promise3]).then(values => console.log(values)).catch((console.error))



const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(items.length);

// Bluebird.delay(2000).then(() => console.log("Delayed By 1 second"));


// Bluebird.map(items, async (item) => {
//     const res = await Bluebird.delay(2000, item * 2);
//     return res;
// }).then(console.log);

// Bluebird.map(items, async (item) => {
//     console.log(`Start Item: ${item}`);
//     const res = await Bluebird.delay(2000, item * 2);
//     console.log(`End Item: ${item}`);
//     return res;
//     //Limits concurrency to 2 promises at a time means , Bluebird ensures that no more than two promises are running (executing the asynchronous function) at the same time.
// }, { concurrency: 3 }).then(console.log);


// Bluebird.each(items, async (item) => {
//     const res = await Bluebird.delay(1000, item * 2);
//     console.log(res)
// }).then(() => console.log("All promises completed"))


//Bluebird.filter doesn't modify the original items in the array. Instead, it evaluates the condition on each item
// Bluebird.filter(items, async (item) => {
//     const res = await Bluebird.delay(10000, item * 2);
//     return res > 5;
// }).then(console.log).catch(console.log);


// Bluebird.reduce(items, async (acc, item) => {
//     const res = await Bluebird.delay(0, acc + item);
//     return res;
// }, 0)
//     .then(console.log)


// This method waits for multiple promises to resolve and returns an array of results. It’s like Promise.all(), but without needing to wrap the values in an array.

// const p1 = Bluebird.reject(1);
// const p2 = Bluebird.reject(3);
// const p3 = Bluebird.resolve(4);
// const p4 = Bluebird.resolve(8);

// Bluebird.join(p1, p2,p3, (val1, val2,val3) => {
//     console.log(val1, val2, val3);
// }).catch(console.log)


// Bluebird.any([p1,p2,p3]).then(console.log).catch(console.log)

// const p5 = Bluebird.delay(1000).then(()=>'First')
// const p6 = Bluebird.delay(500).then(() => 'Second')

// Bluebird.race([p5,p6]).then(console.log)


// This method maps over the array but processes the promises in series rather than in parallel.
// Bluebird.mapSeries(items, async (item) => {
//     const res = await Bluebird.delay(1000, item * 2);
//     console.log(res);
// }).then(() => console.log(`All items processed in series`));


// Bluebird.settle([p1, p2, p3, p4]).then(console.log).catch(console.log)


//cancel promise
Bluebird.config({
    cancellation: true,
});

// const promise = new Bluebird((res, rej, onCancel) => {
//     onCancel(() => {
//         console.log(`Promise has been canceled!`)
//     })

//     setTimeout(() => res('Promise Completed'), 5000);
// });

// setTimeout(() => promise.cancel(), 2000);

// promise.then(console.log).catch(console.log)


const nums = [1, 2, 3, 4];
const res = Bluebird.map(nums, async (num) => {
    // console.log(nums);
    const promise = Bluebird.delay(1000,num)    
    if (num === 2) promise.cancel();
  
  return promise;
})
  .then(console.log)
  .catch(console.error);
  
