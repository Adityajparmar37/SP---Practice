function add(a, b, cb) {
  let res = a + b;
  cb(res);
}

function showRes(res) {
  console.log(res);
}

add(3, 4, showRes);
