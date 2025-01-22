// function Parent(name) {
//     this.name = name
// }

// Parent.prototype.sayHello = function () {
//     console.log(`Hello, I'm ${this.name}`);
// }

// const child = new Parent('Aditya');
// child.sayHello();

// console.log(child.__proto__)


const parent = {
    greet: function () {
        console.log("Hello from Parent!");
    }
}

const child = {
    a: 2,
    welcome: function() {
        console.log("Welcome from child");
    },
    __proto__: {
        b: 3,
        c: 4,
        e: function() {
            console.log("Hello from e");
        },
        __proto__: {
            d: 5,
            f: function() {
                console.log("hi from f");
            }
        }
    }
}



// child = Object.create(parent);

// exisiting prototype of child will be overwritten by parent prototype 
// Object.setPrototypeOf(child, parent)
// console.log(child);

// child.greet();

// prototype chaining 
console.log(child.__proto__.__proto__.__proto__.__proto__)


// console.log(child.__proto__ === parent);

// console.log(child.__proto__);