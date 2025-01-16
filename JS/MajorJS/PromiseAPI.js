// const dbTest = () => {
//   setTimeout(() => {
//     console.log("DB call");
//     return true;
//   }, 5000);
// };

// const first = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (dbTest()) {
//         res("First");
//       }
//     }, 1000);
//   });
// };

// const second = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       rej("Second");
//     }, 3000);
//   });
// };

// const third = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("Third");
//     }, 6000);
//   });
// };

// const fourth = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       rej("Fourth");
//     }, 6000);
//   });
// };

// const result = Promise.race([first(), second(), third()]);
// result
//   .then((value) => console.log("Values : ", value))
//   .catch((err) => console.log("Error : ", err));

// //all -> give Error message only or array of fulfilled promise
// // allsettaled -> give array with status , value and reason
// // any -> fullfilled promise noh ans
// // race -> first settaled promise to be return


const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.round(Math.random() * 10) % 2 === 0) {
      let count = 0;
      let id = setInterval(() => {
        console.log(count);
        count++;
        if (count > 3) {
          clearInterval(id);
          return resolve("Promise 1")
        }
      }, 500);
    } else {
      return reject("Error 1");
    }
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.round(Math.random() * 10) % 2 === 0) {
      return resolve("Promise 2");
    } else {
        return reject("Error 2");
        // console.log("Promise 2");
    }
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.round(Math.random() * 10) % 2 === 0) {
      return resolve("Promise 3");
    } else {
      return reject("Error 3");
    }
  }, 2000);
});

const allPromises = [p1, p2, p3];

Promise.all(allPromises)
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log(e);
  });