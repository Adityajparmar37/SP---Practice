function level1(a) {
  return function level2(b) {
    return function level3(c) {
      return a + b + c;
    };
  };
}

const res1 = level1(1);
const res2 = res1(2);
const final = res2(3);
console.log(final);


// infinity currying

const sum = (a) => {
  return function (b) {
    if (b) {
      return sum(a+b)
    } else {
      return a;
    }
  }
}

console.log(sum(1)(2)(3)(4)());