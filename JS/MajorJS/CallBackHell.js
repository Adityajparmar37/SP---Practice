// api.createOrder(orders, function (OrderID) {
//   processToPayement(OrderID, function (paymentId) {
//     showOrder(paymentId);
//   });
// });

// const res = api.createOrder(orders);
// res.then((orderId) => processToPayement(orderId))
//.then((paymentId)) => showOrder(paymentId)

const makeBurger = (nextStep) => {
  getBread(nextStep, (bread) => {
    getCheese(bread, (cheese) => {
      getVeggies(bread, cheese, (veggies) => {
        getPatties(bread, cheese, veggies, (patties) => {
          console.log("Cook Burger");
        });
      });
    });
  });
};

const getBread = (type, callback) => {
  console.log(` Bread : ${type}`);
  callback(`${bread} with cheese`);
};

const getChesse = (bread, callback) => {
  console.log(`Adding cheese to ${bread}`);
  callback(`${bread} with cheese`);
};

const getVeggies = (bread, cheese, callback) => {
  console.log(`Adding veggies to ${bread} with cheese`);
  callback(`${bread} with cheese and veggies`);
};

const getPatties = (bread, cheese, veggies, callback) => {
  console.log(`Adding to patties to ${bread} with cheese and veggies`);
  callback(`${bread} with cheese, veggies, and patties`);
};

makeBurger("multigran");
