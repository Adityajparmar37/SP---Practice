function a() {
  var b = 10;
  let a = 12;
  c();
    function c() {
      debugger
    console.log(a);
    console.log(b);
  }
}

a();
console.log(b);
