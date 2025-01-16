const cart = ["Shoes", "Pants", "Kruta"];

createOrder(cart)
    .then(function (orderId) {
        console.log(orderId);
        return orderId;
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .catch(function (err) {
        console.log(err.message)
    })
    // this will always run definately no matter error is there or not 
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .then(function (orderId) {
        console.log("i will run definately, no matter");
    })


function createOrder(cart) {
    const p = new Promise((res, rej) => {
        rej(1234)
    })

    return p;
}

function proceedToPayment(orderId) {
    return `${orderId} payment successfull`
}
