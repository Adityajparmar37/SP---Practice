function y(n) {
  n();
}

function x() {
  console.log("from x by n");
}

y(x);

const ArrRadius = [1, 2, 3];
const area = function (radius) {
  return Math.PI * radius * radius;
};

console.log(ArrRadius.map(area));
