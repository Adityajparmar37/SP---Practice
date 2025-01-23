// var x = {
//     value: 1,
//     toString() {
//         return this.value++;
//     }
// }


// if (x == 1 && x == 2 && x == 3){
//     console.log("Hello")
// }

// Object.prototype.forEach = function (callBack) {
//   for (let keys in this) {
//     if (Object.hasOwn(this, keys)) {
//       callBack(keys,this[keys],this);
//     }
//   }
// };

// const obj = {
//   a: 1,
//   b: 2,
//   c: 4,
// };

// function Maybe(key,value,currentObject) {
//   // console.log(elem * 2);
//   console.log(key,  " :", value, " from object", currentObject);
// }

// obj.forEach(Maybe);

// const arr = [1, 2, 3];
// arr.forEach((elem) => console.log(elem * 2));




// // async await in loop

// //for..of loop
// async function proseedItem(items) {
//     // console.log("inside Proseed Item = ",items)
//     for (const item of items) {
//         //promise inside for loop
//         const value = await handlePromise(item);
//         console.log(value);
//     }
// }

// //for loop
// async function proseedItem2(items) {
//     // console.log("inside Proseed Item = ",items)
//     for (let i = 0; i < items.length; i++){
//         const value = await handlePromise(items[i]);
//         console.log(value);
//     }
// }


// //forEach loop   ->  DO NOT used FOREACH LOOP FOR ASYNC AND AWAIT
// async function proseedItem3(items) {
//     items.forEach(async (item) => {
//         await handlePromise(item);
        
//         // it will not print one by one rather it will print all promise result together but will initiated promises concurrently

//         //becz it does not wait for the await inside its callback
//         console.log(item);
//     })
//    console.log("This logs before all async operations are done!");
// }



// // using Promise.all
// async function proseedItem4(items) {
//     const p = items.map((item) => handlePromise(item));
//     const result = await Promise.all(p);
//     result.forEach((result)=>console.log(result))
// }


// //promise
// async function handlePromise(item) {
//     // console.log(item);
//     return new Promise((res)=>setTimeout(()=>res(item),1000))
// }

// proseedItem4([1,2,"aditya","paksdhfkshfkshdfkshdfkhsdkfhskfhdksdjhfkjshdfkjshfkjshdfkhsdkfjhskjdfhjksfhd",3])



// forEach + async/await: Does not properly handle async, leading to unpredictable results. The loop continues without waiting for the promises.
// the forEach loop starts all async operations concurrently and does not await them

// Promise.all: Executes promises concurrently, but guarantees that the results will be handled after all promises have been resolved and in the correct order.



// example If you have an API that takes a user name as a parameter, and you have an array of names, then how will you call api ?


// if use for..of --> sequentially
// map use --> concurently
// forEach --> does not wait for async task


// The for...of loop can be used to iterate over an array (or any iterable) one element at a time. When you use await inside a for...of loop, it ensures that the code waits for the asynchronous operation (the promise) to complete before moving on to the next iteration.


// When used with async/await, map does not inherently wait for the promises to resolve. Instead, it creates an array of promises, which you can then handle using Promise.all or similar to resolve them all concurrently.


// When you use await in a filter callback, the callback always returns a promise. Since promises are always truthy, everything item in the array passes the filter. Writing await in a filter is like writing this code: hence rather then filtering it will return all promises


// async function fetchUser(names) {
//     const promises = names.map(async (name) => {
//         const data = await NameAPI(name);
//         // console.log(data);

//         // i can even have any condition or can manipulate the data before return
//         //eg -> if(data > 25) return data
//         //eg -> return data + 100
        
//         return data;
//     })
    
    
//     // const promises = names.filter(async (name) => {
//     //     const data = await NameAPI(name);
//     //     if (data === "Parth") {
//     //         return data;
//     //     }
//     // })
    
    
//     console.log("Promises : " , promises);


//     const results = await Promise.all(promises);

//     console.log("Results : " , results);
// }

// async function NameAPI(name) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             return res(`User ${name}`)
//         },3000)
//     })
// }

// names = ["Devanshu","Sijo","Sagar","Parth","Krupal"]
// fetchUser(names)







// Don’t await inside filter and reduce. Always await an array of promises with map, then filter or reduce accordingly.


// map and filter together for handle promises and filter its result concurrently

// async function fetchUser(names) {
//     const promisesMap = names.map((name) => NameAPI(name))
    
//     const results = await Promise.all(promisesMap);
//     console.log(results)
    
//     const promisesFilter = results.filter((name) => {
//         if (name === "User Parth") {
//             return name;
//         }
//     })
    
    
//     console.log("Promises : " , promisesFilter);

//     // console.log("Results : " , results);
// }

// async function NameAPI(name) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             return res(`User ${name}`)
//         },3000)
//     })
// }

// names = ["Devanshu","Sijo","Sagar","Parth","Krupal"]
// fetchUser(names)


// you can use await in a reduce callback, but you have to remember to await the accumulator first!

// const reduceLoop = async _ => {
//   console.log('Start')

//   const sum = await fruitsToGet.reduce(async (promisedSum, fruit) => {
//     const sum = await promisedSum
//     const numFruit = await getNumFruit(fruit)
//     return sum + numFruit
//   }, 0)

//   console.log(sum)
//   console.log('End')
// }



// const arrayLike = {
//     length: 4,
//     0: 'a',
//     1: 'b',
//     2: 'c',
// }

// console.log(Array.prototype.indexOf.call(arrayLike,'c'));


// // null is lossely equal to undefined
// console.log(null == 0); // false

// //null is converted to 0 when compare it with any number
// console.log(null >= 0); // true
// console.log(null <= 0); // true
// console.log(null > 0); // false
// console.log(null < 0); // false

// console.log(null === null);  // true


// function test(a, b) {
//     console.log(a + b);  // NAN
// }
// test(undefined, 10);

// let x;
// console.log(x + 5);  // NAN


// const arr = [1, 2, 3];
// arr.push(4);
// arr[0] = 99;
// console.log(arr);

// // this will not work becz of const
// // arr = [5, 6, 7];

// console.log("" === "string"); // false
// console.log(typeof NaN === "number")  // true
// console.log(typeof NaN === Number)  // false

// console.log(typeof "bla" === "string"); //true
// console.log(typeof `template literal` === "string"); //true


// const arr1 = [1, 2];
// const arr2 = [...arr1, 3, 4];
// arr1.push(5);
// console.log(arr1);
// console.log(arr2);

// const obj1 = { a: 1, b: 2 };
// const obj2 = { ...obj1, a: 3 };
// console.log(obj1);
// console.log(obj2);



// function add(...nums) {
//     console.log(nums.reduce((sum, num) => sum + num,0));
// }

// add(1, 2, 3, 4);
// const [first, second, ...third] = [10, 20, 30, 40];
// console.log(first);
// console.log(second);
// console.log(third);

// const arr5 = [1, 2, 3];
// const newArr = [...arr5, 4, 5]; // Using Spread
// console.log(newArr);

// function test(a, ...rest) {
//     console.log(rest); // Using Rest
// }
// test(1, 2, 3, 4);



// let obj = { a: null, b: 0 };
// let b = null;
// console.log(obj.a == obj.b);  // false
// console.log(obj.a === obj.b); // false
// console.log(obj.a + 1);
// console.log(b + 1);

// let a;
// console.log(a + 1);
// console.log(a === undefined);
// // console.log(z);
// console.log(typeof z)

// var value = 50;
// const TestObj = {
//     value: 10,
//     print() {
//         return "hello" + console.log(this.value);
//     },
//     nested: {
//         value: 20,
//         print() {
//             console.log("Nested Value = ", this.value)
//         },
//         reprint : () => {
//             console.log("Nested Nested print = ", this.value);
//         },
//         x: function () {
//             const reprint = () => {
//             console.log("Nested Nested print = ", this.value);
//             }
//             reprint();
//         }
//     }
// };

// TestObj.print();
// TestObj.nested.print();
// TestObj.nested.reprint();
// TestObj.nested.x();


// // const func = TestObj.print();
// // console.log(func);
// // func();

// // console.log(typeof console.log)
// // console.log(typeof console.log())


// const obj3 = {
//     a: 20,
//     x: function () {
//         const y = () => {
//             console.log(this)
//         };
//         y();
//     }
// }

// // obj3.x();

// const obj = {
//     value: 100,
//     print: function () {
//         console.log("print this ", this)
//         const arrow = () => console.log( " Arrow value = " , this.value);
//         const regular = function () {
//             console.log("expression this",this);
//             console.log("expression function " , value = this.value);
//         };
//         arrow();
//         regular();
//     }
// };

// obj.print();




// let arr = [1, 2, 3, 4];

// arr.forEach((val, index, array) => {
//     if (index === 1) {
//         arr[index] = 5;
//     }
//     console.log(val);
// });

// console.log(arr)


// let numbers = [1, 2, 3];
// let result = numbers.map((val, index) => {
//     if (index === 0) {
//         numbers[index + 1] = 10;
//     }

//     return val * 2;;
// })

// console.log(result);
// console.log(numbers);


// let arr6 = [10, 20, 30, 40]
// let filtered = arr6.filter((val, index) => {
//     // console.log(index)
//     arr6[index + 1] = 50;
//     return val > 25;
// })
// // console.log(arr6);
// console.log(filtered);


// let nums = [1, 2, 3, 4];
// let resultNums = nums.reduce((acc, val, index) => {
//     if (index === 1) {
//         acc.push(10);
//     }
//     acc.push(val);
//     return acc;
// }, []);
// console.log(resultNums);




// a = 50;
// const obj = {
//     a: 20,
//     nestedObj: {
//         b: 30,
//         print() {
//             const c = 100;
//             return function reprint() {
//                 return  function hello(){
//                 console.log(this.a);
//                 console.log(this.b);
//                 console.log(this.c);
//                 }
//             }
            
//         }
//     }
// }

// const ans = obj.nestedObj.print();
// const res = ans();
// res();


// const obj  = {
//     a:2,
//     print: function() {
//         console.log("print" , this)
//         function reprint() {
//             console.log("reprint" , this);
//             const hello =  {
//                 hi : () => {
//                      console.log(this);
//                 }
//             }
//             hello.hi()
//         }
//         reprint();
//     }
// }

// obj.print();


// let name = false;
// if (name ?? undefined) {
//     console.log("name");
// } else if (name || 15) {
//     console.log("in if else");
// }
// else {
//     console.log("name in else")
// }

// console.log("Start");

// const promise = new Promise((resolve, reject) => {
//     console.log("Promise created");
//     resolve("Promise resolved");
// });

// promise.then((value) => console.log(value));

// console.log("End");


// Promise.resolve(1).then((value) => {
//     console.log(value);
//     return value + 1;
// }).then((value) => {
//     console.log(value);
//     throw new Error("Something went wrong");
// }).catch((error) => {
//     console.log(error.message);
//     return 10;
// }).then((value) => {
//     console.log(value)
// })

// setTimeout(() => console.log("Timeout"), 0);

// Promise.resolve().then(() => {
//     console.log("Promise resolved");
// });

// console.log("End of script");

// async function test() {
//     try {
//         const result = await Promise.reject("Error occured");
//         console.log(result);
//     } catch (error) {
//         console.log("Caught: ", error);
//     } finally {
//         console.log("Finally Block");
//     }
// }
// test();

// async function asyncFunc() {
//     console.log(1);
//     const promise = new Promise((res) => res(2));
//     console.log(await promise);
//     console.log(3)
// }

// console.log(0);
// asyncFunc();
// console.log(4)


// const promise1 = Promise.resolve(1);
// const promise2 = Promise.reject("Failed");
// const promise3 = Promise.resolve(3);

// Promise.all([promise1,promise2,promise3]).then((values)=>console.log(values)).catch((error)=>console.log(error))

// function delay(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function delayedExecution() {
//     console.log("start");
//     await delay(1000);
//     console.log("1 second later");
//     await delay(2000);
//     console.log("3 seconds total");
// }

// delayedExecution();


// async function fetchData() {
//     return "Data fetchData"
// }

// async function nested() {
//     const data = await fetchData();
//     console.log(data);
//     return "nested completed"
// }

// async function main() {
//     console.log("start");
//     const result = await nested();
//     console.log(result);
//     console.log("end");
// }

// main();

// const obj = {
//     a: 1,
//     b: 2,
//     a:5
// }
// console.log(obj);
// const { a, b, c:d = 5 } = obj;
// console.log(a,b,d)


// function name() {
//     console.log("Aditya")
// }

// name()
// let name = "Hello"
// console.log(name);

// async function test() {
//     console.log("Inside Test");
//     return 42;
// }

// const result = test();
// console.log(result);


// const promises = [
//     Promise.resolve("Resolved"),
//     Promise.reject("Rejected"),
//     Promise.resolve("Another Resolved")
// ];


// Promise.allSettled(promises).then((res) => {
//     res.forEach((result) => console.log(result));
// })
// console.log(Object.is(NaN, NaN));
// console.log(NaN === NaN);

// console.log(Object.is(+0, -0));
// console.log(+0 === -0);


// const obj = Object.freeze({
//     a: 1,
//     b: {
//         c: 2,
//     },
// });

// obj.a = 10;

// // nested object can be even change in freeze . Hence need to even freeze nested object
// obj.b.c = 20;

// console.log(obj.a);
// console.log(obj.b.c);


// const proto = { greet: "Hello" };
// const obj = Object.create(proto);

// console.log(obj.greet);
// console.log(obj);
// // false becz it will be in prototype in obj , not in property
// console.log(obj.hasOwnProperty("greet"));


// const key = "name";
// const obj = {
//     [key] : "Aditya"
// }

// console.log(obj[key]);
// console.log(obj.name);

// const target = { a: 1 };
// const source = { b: 2, a: 3 };

// // const result1 = Object.assign(target, source);
// const result2 = { ...target, ...source };

// console.log(result1);
// console.log(result2);

// const obj = {
//     a: 1,
//     b:2,
// }

// Object.seal(obj);

// obj.a = 10;
// delete obj.b;
// console.log(obj);


// // reference for nested object will be same but not the main
// const obj = { a: 1, b: { c: 2 } };
// const shallowCopy = { ...obj };

// // shallowCopy.b.c = 10;
// shallowCopy.a = 20;

// console.log(obj.a);
// console.log(shallowCopy.a);

// const original = { a: 1, b: { c: 2 } };
// const deepCopy = structuredClone(original);

// // in deep copy you cannot change anything not even nested object
// deepCopy.a = 42;
// deepCopy.b.c = 41;

// console.log(original.a);
// console.log(original.b.c);


// const obj = Object.create({ inherited: 42 });
// obj.own = "Hello";

// invocation is different

// console.log(Object.hasOwn(obj, "own"));
// console.log(Object.hasOwn(obj, "inherited"));
// console.log(obj.hasOwnProperty("own"));
// console.log(obj.hasOwnProperty("inherited"));


// const obj = {
//     value: 10,
//     hello() {
//         return this.value;
//     },
// };


// // if you extract out the function then it will be invoke through window
// const extractedMethod = obj.hello;
// console.log(obj.hello());
// console.log(extractedMethod());

// const obj = { a: 1, b: 2 };
// Object.assign(obj, obj);
// console.log(obj)

// const obj = {};
// Object.defineProperty(obj, "hidden", {
//     value: "You can't see me!",
//     enumerable: false,
// });

// console.log(Object.keys(obj));
// console.log(obj.hidden);


const obj = {
    a: 1,
    
    ArrFun: () => {
        console.log("This of Arrow", this);
    },

    DecFun() {
        console.log("Function Declaration ", this)
        return function returnFun(){
        console.log("Return Function ", this);
    }
    },
    ExpFun: function () {
      console.log("Function Expression " , this);  
    },

    Nestedobj: {
        b: 2,
        NestedObjectArrFun: () => {
            console.log("Nested Object Arrow Function", this);
        },
        NestedObjectFun() {
            console.log("Nested Object Decalration Function", this);
            const obj3 =  {
                obj3Fun() {
                    console.log("Nested Nested Object ", obj.Nestedobj.NestedObjectArrFun());
                }
            }
            obj3.obj3Fun()
            return function returnFun(){
            console.log("Return Function ", this);
            }
        },
        NestedObjectExpFun: function () {
            console.log("Nested Object Expression Function" , this);
        }
    }
}


obj.ArrFun();
const returnFun = obj.DecFun();
returnFun()
obj.ExpFun();

console.log("--------Nested Object-------")

obj.Nestedobj.NestedObjectArrFun();
const NestedReturnFun = obj.Nestedobj.NestedObjectFun();
NestedReturnFun();
obj.Nestedobj.NestedObjectExpFun();

// Arrow functions lexically bind this, meaning they inherit this from the context in which they were created, not the context in which they are called