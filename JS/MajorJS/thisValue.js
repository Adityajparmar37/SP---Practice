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


const obj  = {
    a:2,
    print: function() {
        console.log("print" , this)
        function reprint() {
            console.log("reprint" , this);
            const hello =  {
                hi : () => {
                     console.log(this);
                }
            }
            hello.hi()
        } 
        reprint();
}
}

obj.print();

// "use strict"

// const myObj = {
// name() {
//     const name = "Aditya"
//     console.log(this)
        
//     function surname() {
//         console.log(this)       
//         }
//     }
// }
// const res = myObj.name()
// res();


//No matter how the arrow function get() is called, it always keeps the lexical context numbers. Indirect call with other context get.call([0]) or . get.apply([0]), rebinding get.bind([0])() have no effect.

// An arrow function cannot be used as a constructor. Invoking it as a constructor new get() throws an error: TypeError: get is not a constructor.
const numbers = [1, 2];

console.log(this === numbers);

(function () {
    const get = () => {
        console.log(this === numbers);
        return this;
    }
    get();

    console.log(get.call([0]))
}).call(numbers);