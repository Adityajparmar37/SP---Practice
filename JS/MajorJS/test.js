var x = {
    value: 1,
    toString() {
        return this.value++;
    }
}


if (x == 1 && x == 2 && x == 3){
    console.log("Hello")
}

Object.prototype.forEach = function (callBack) {
  for (let keys in this) {
    if (Object.hasOwn(this, keys)) {
      callBack(keys,this[keys],this);
    }
  }
};

const obj = {
  a: 1,
  b: 2,
  c: 4,
};

function Maybe(key,value,currentObject) {
  // console.log(elem * 2);
  console.log(key,  " :", value, " from object", currentObject);
}

obj.forEach(Maybe);

const arr = [1, 2, 3];
arr.forEach((elem) => console.log(elem * 2));




// async await in loop

//for..of loop
async function proseedItem(items) {
    // console.log("inside Proseed Item = ",items)
    for (const item of items) {
        //promise inside for loop
        const value = await handlePromise(item);
        console.log(value);
    }
}

//for loop
async function proseedItem2(items) {
    // console.log("inside Proseed Item = ",items)
    for (let i = 0; i < items.length; i++){
        const value = await handlePromise(items[i]);
        console.log(value);
    }
}


//forEach loop   ->  DO NOT used FOREACH LOOP FOR ASYNC AND AWAIT
async function proseedItem3(items) {
    items.forEach(async (item) => {
        await handlePromise(item);
        
        // it will not print one by one rather it will print all promise result together but will initiated promises concurrently

        //becz it does not wait for the await inside its callback
        console.log(item);
    })
   console.log("This logs before all async operations are done!");
}



// using Promise.all
async function proseedItem4(items) {
    const p = items.map((item) => handlePromise(item));
    const result = await Promise.all(p);
    result.forEach((result)=>console.log(result))
}


//promise
async function handlePromise(item) {
    // console.log(item);
    return new Promise((res)=>setTimeout(()=>res(item),1000))
}

proseedItem4([1,2,"aditya","paksdhfkshfkshdfkshdfkhsdkfhskfhdksdjhfkjshdfkjshfkjshdfkhsdkfjhskjdfhjksfhd",3])



// forEach + async/await: Does not properly handle async, leading to unpredictable results. The loop continues without waiting for the promises.
// the forEach loop starts all async operations concurrently and does not await them

// Promise.all: Executes promises concurrently, but guarantees that the results will be handled after all promises have been resolved and in the correct order.



// example If you have an API that takes a user name as a parameter, and you have an array of names, then how will you call api ?


// if use for..of --> sequentially
// map use --> concurently
// forEach --> does not wait for async task


//The for...of loop can be used to iterate over an array (or any iterable) one element at a time. When you use await inside a for...of loop, it ensures that the code waits for the asynchronous operation (the promise) to complete before moving on to the next iteration.


//When used with async/await, map does not inherently wait for the promises to resolve. Instead, it creates an array of promises, which you can then handle using Promise.all or similar to resolve them all concurrently.

async function fetchUser(names) {
    const promises = names.map(async (name) => {
        const data = await NameAPI(name);
        console.log(data);
        return data;
    })
    console.log("Promises : " , promises);


    const results = await Promise.all(promises);

    console.log("Results : " , results);
}

async function NameAPI(name) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            return res(`User ${name}`)
        },3000)
    })
}

names = ["Devanshu","Sijo","Sagar","Parth","Krupal"]
fetchUser(names)