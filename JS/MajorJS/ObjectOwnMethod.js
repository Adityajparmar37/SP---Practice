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

// const arr = [1, 2, 3];
// arr.forEach((elem) => console.log(elem * 2));

var x;

if (x == 1 && x == 2 && x == 3) {
  console.log("Hello");
}
