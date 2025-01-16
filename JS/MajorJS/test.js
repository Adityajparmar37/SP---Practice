var x = {
    value: 1,
    toString() {
        return this.value++;
    }
}


if (x == 1 && x == 2 && x == 3){
    console.log("Hello")
}