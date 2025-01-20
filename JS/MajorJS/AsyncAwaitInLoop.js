const fruitBasket = {
    apple: 27,
    grape: 0,
    pear:14
}

const fruitsToGet = ['apple', 'grape', 'pear'];

const sleep = (ms) => {
    return new Promise((res)=>setTimeout(res,ms))
}


const getNumFruit = (fruit) => {
    return sleep(1000).then(()=>fruitBasket[fruit])
    // return fruitBasket[fruit]
}


// getNumFruit('apple').then((num) => console.log(num))


// const getAllFruits = async () => {
//     console.log("Start");

//     const numApples = await getNumFruit('apple')
//     console.log(numApples);

//     const numGrapes = await getNumFruit('grape');
//     console.log(numGrapes);

//     const numPears = await getNumFruit('pear');
//     console.log(numPears);

//     console.log("End");
// }

// getAllFruits()


// const forLoop = async () => {
//     console.log('start');
//     for (let i = 0; i < fruitsToGet.length; i++){
//         const fruits = fruitsToGet[i];
//         const numOfFruit = await getNumFruit(fruits)
//         console.log(numOfFruit);
//     }

//     console.log("end");
// }

// forLoop();



// const forEachLopp = () => {
//     console.log("start");

//     fruitsToGet.forEach(async (fruit) => {
//         const numFruits = await getNumFruit(fruit);
//         console.log(numFruits);
//     })

//     console.log("end");
// }

// forEachLopp();


// map always return an array of promises becz async function always return promises
// const mapLoop = async () => {
//     console.log("start");

//     const numFruits = fruitsToGet.map(async (fruit) => {
//         const numOfFruit = await getNumFruit(fruit);
//         // numOfFruit.then((v=>console.log(v)))
//         return numOfFruit + 100;
//     })
    
//     const numPromises = await Promise.all(numFruits);
//     console.log(numPromises);

//     console.log("end")
// }
// mapLoop();




// filter does not await for promises to resolve
// const filterLoop = async () => {
//     console.log("start");

//     const filterData = fruitsToGet.filter(async (fruit) => {
//         const numFruit = await getNumFruit(fruit);
//         // console.log(numFruit);
//         return numFruit > 20;
//     })

//     console.log(filterData);
//     console.log("end");
// }
// filterLoop();


// const filterLoop = async () => {
//     console.log("start");

//     const promises = fruitsToGet.map((fruit) => getNumFruit(fruit));
//     const numFruits = await Promise.all(promises);
//     // console.log(numFruits);

//     const filterData = fruitsToGet.filter((fruit, index) => {
//         const numFruit = numFruits[index];
//         return numFruit > 20;
//     })

//     console.log(filterData)
//     console.log("end");
// }
// filterLoop();


//In the second iteration, sum is a promise. (Why? Because asynchronous functions always return promises!) numFruit is 0. A promise cannot be added to an object normally, so the JavaScript converts it to [object Promise] string.
//promise is a truthy values (rejected or success does not matter)

const reduceLoop = async () => {
    console.log("start");

    const sum = fruitsToGet.reduce(async (promSum, fruit) => {
        const numFruit = await getNumFruit(fruit);
        // console.log(fruit)
        // promSum = await promSum;
        console.log(promSum);
        // console.log(numFruit)
        // console.log(promSum);
        // numFruit --> promise 
        // sum --> 0 
        // total -> 0 + [objectPromise] -> "[objectPromise]"
        //pear -> 14 
        // console.log(sum);
        return promSum + numFruit
    }, 0)
    
    console.log("Final sum = " , sum)
    console.log("end")
}
reduceLoop()



// const reduceLoop = async () => {
//     console.log("start");

//     const promises = fruitsToGet.map(getNumFruit);
//     const numFruits = await Promise.all(promises);
//     const sum = numFruits.reduce((sum, fruit) => sum + fruit);

//     console.log(sum)
//     console.log("End")
// }

// reduceLoop();