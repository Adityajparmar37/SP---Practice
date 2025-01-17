
const p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise Resolved")
    },10000)
})

const p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise Resolved")
    },20000)
})

console.log("start")

async function handlePromise() {
    console.log("Inside HandlePromise")

    try {
        // await is always written in front of promise
        const val = await p1;
        // unless and untill promise is setallted then after only below code will be excuted 
        console.log("Hello World");
        console.log(val)


        // as promise is alreayd setallted hence it will not wait here

        // as p1 take more time to setalled hence p2 will wait as await is there against p1

        // hence after 5 sec both will print 
        const val2 = await p2;
        console.log("Hello World 2");
        console.log(val2)
    } catch (error) {
        console.log(error);
    }
}
handlePromise()

// will print first as it is not under async
console.log("end")

// if you do not return promise it will by default wrap it into a promise
// async function getData() {
//     // return "Hello"

//     // as p is promise hence it will not wrap it into a promise it will simply return
//     p.then((res) => console.log(res));
//     console.log("Hello World");
    
// }
// getData();

// const data = getData();
// console.log(data);


// call stack will be empty initially then handlePromise() will come to stack

// then when it ecounter await at that time handlePromise() excution will be suspend and will move futher ... now as soon as Promise is setallted handlePromise exceution is resumed from same point


// program is not suspened becz call stack cannot be suspend or stop .. hence only handlePromise is suspended