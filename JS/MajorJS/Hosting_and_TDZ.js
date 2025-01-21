getName()
console.log(x);

// TDZ
console.log(y);

var x = 7;
let y = 5;

// function expressoin do not host
const hello = function getName(){
    console.log("NamasteJS")
} 

//TDZ
// function declaration host
function getName() {
    console.log("Hi Aditya");
}

const getName = () => console.log("hello");