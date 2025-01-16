const dbTest = () => {
  setTimeout(() => {
    console.log("DB call");
    return true;
  }, 5000);
};

const first = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (dbTest()) {
        res("First");
      }
    }, 1000);
  });
};

const second = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("Second");
    }, 3000);
  });
};

const third = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Third");
    }, 6000);
  });
};

const fourth = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("Fourth");
    }, 6000);
  });
};

const result = Promise.race([first(), second(), third()]);
result
  .then((value) => console.log("Values : ", value))
  .catch((err) => console.log("Error : ", err));

//all -> give Error message only or array of fulfilled promise
// allsettaled -> give array with status , value and reason
// any -> fullfilled promise noh ans
// race -> first settaled promise to be return
