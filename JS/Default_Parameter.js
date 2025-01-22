// function Hello(a = 2, b = null) {
//     console.log(a,b)
// }

// Hello(undefined,5);


const obj = { 
    a: 5
}

// obj does not have a property b. The value of obj?.b is undefined.
// Then you try to call undefined as a function using (). This results in a TypeError because undefined is not a function.
console.log(obj?.b());
console.log(obj?.b?.());



// optional chaining 
let arr;

arr?.map((elem) => console.log(elem));




// nullishing operator

let name = null;
// let name = undefined;
// let name = "";
// let name = false;
// let name = 0;
if (name ?? "hi") {
    console.log("name hi");
} else if (name || 15) {
    console.log("in if else");
}
else {
    console.log("name in else")
}