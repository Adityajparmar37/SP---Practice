// "use strict";

//0) create object using contructor
const obj0 = new Object();
obj0.name = "Aditya";
console.log(obj0);

// 1) assign
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
//create an object from 2 object
//target, source
const res = Object.assign(obj1, obj2);
console.log(obj1);
console.log(res);
console.log(res === obj1);
obj1.a = 6;
console.log(obj1);
console.log(res);

// 2) create
// child inherits prototype from parent object
const parent = { greet: () => "Hello" };

// child with initial property will get overwritten later
let child = { a: 35 };
child = Object.create(parent);
console.log(Object.getPrototypeOf(child));
console.log(child.__proto__);
console.log(Object.keys(child));

//3) defineProperty
// const person = { name: "Aditya" };
const person = {};
Object.defineProperty(person, "age", {
  value: 30,
  //writable true mean you can overwrite value
  writable: true,

  //enumerable false mean you cannot iterate over the properties
  enumerable: false,
});

person.age = 5;

// console.log(person);
for (const keys in person) {
  console.log(keys);
}

//4) defineProperties
const obj4 = {};
Object.defineProperties(obj4, {
  name: { value: "Aditya", writable: true },
  age: { value: 21, writable: false },
});
console.log(obj4);

//5) entries
const obj3 = { x: 10, y: 20, z: 30 };

//convert an object into an array of key value pairs
const entries = Object.entries(obj3);
console.log(entries);
console.log(entries.flat());

//6) fromEntries
//convert an array of key value pair [['a',1],['b',2]] into an object
const arrKeyValuePair = [
  ["a", 1],
  ["b", 2],
];
// flated array will not work
// const flatedArray = ['a', 1,'b',2]
const converted = Object.fromEntries(arrKeyValuePair);
console.log(converted);

//7) freeze
const ToFreezeObj = {
  a: 1,
  my: {
    name: "Aditya",
  },
};
Object.freeze(ToFreezeObj);
//Freeze object cannot change
// ToFreezeObj.a = 2;

//nested Object Can be change
ToFreezeObj.my.name = "Aditya Parmar";
console.log(ToFreezeObj);

// now nested object is also freeze hence it can also be not change
Object.freeze(ToFreezeObj.my);
ToFreezeObj.my.name = "Adi";
console.log(ToFreezeObj);

//8)getOwnPropertyDescriptor
const obj5 = { name: "Adi" };
const descriptor = Object.getOwnPropertyDescriptor(obj5, "name");
console.log(descriptor);

//9) getOwnPropertyDescriptors

// get one property details
// const descriptorAll = Object.getOwnPropertyDescriptor(Array,"length");

//get all property details
const descriptorAll = Object.getOwnPropertyDescriptors(Array);

console.log(descriptorAll);

//10)getOwnPropertyNames
// const propertyNames = Object.getOwnPropertyNames(Array);
const propertyNames = Object.getOwnPropertyNames(obj5);
console.log(propertyNames);

//12)getPrototype
const prototypeGet = Object.getPrototypeOf(child);
console.log(prototypeGet);
// console.log(prototypeGet === parent);

const arr = [1, 2, 3];

//this will check like arr prototype with Array construct (instance)
console.log(Object.getPrototypeOf(arr) === Array);

//this will check like arr prototype with Array prototype
//hence when you create arr with [] or new Array . Then all the prototype of Array is copied to arr
console.log(Object.getPrototypeOf(arr) === Array.prototype);

//13)Object.is
// compare strict value
console.log(Object.is(10, 10));
console.log(Object.is(0, -0));
console.log(Object.is(NaN, NaN));
console.log(Object.is(prototypeGet, parent));

//14)isExtensible
const obj6 = { a: 1 };
console.log(Object.isExtensible(obj6));
Object.preventExtensions(obj6);

//cannot assign as object cannot be extension futher
//you can even delete properties
obj6.age = 21;

console.log(Object.isExtensible(obj6));

//15)Object.isFrozen
//check whether the object is frozen or not
console.log("Frozen = ", Object.isFrozen(ToFreezeObj));

//16) Seal
const ObjToSeal = { a: 1 };
Object.seal(ObjToSeal);
ObjToSeal.a = 33;
console.log(ObjToSeal);
//cannot add new properties to object
ObjToSeal.name = "Aditya";
console.log(ObjToSeal);

//cannot delete in seal
//just can modified the properties
delete ObjToSeal.a;
console.log(ObjToSeal);

//17) isSealed
console.log(Object.isSealed(ObjToSeal));

//18) keys and values
const getKeysValue = {
  name: "Aditya",
  id: 437,
  surname: "Parmar",
  isFullTime: false,
  age: [18, 19, 20, 21],
};

console.log(Object.keys(getKeysValue));
console.log(Object.values(getKeysValue));



//19)getOwnPropertySymbols
const a = Symbol("Aditya");
console.log(a);
const b = "Aditya";
console.log(a === b);
const c = Symbol("Aditya");
console.log(a === c);


//20)setPrototypeOf
const proto = { type: "animal" };
const obj8 = { name: "Dog" };
Object.setPrototypeOf(obj8, proto);
console.log(obj8.type);
