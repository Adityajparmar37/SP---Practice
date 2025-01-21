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
// }
// }

// obj.print();

"use strict"

const myObj = {
name() {
    const name = "Aditya"
    console.log(this)
        
    function surname() {
        console.log(this)       
        }
    }
}
const res = myObj.name()
res();


