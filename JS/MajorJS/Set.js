const unique = new Set([1, 2, 3, 4, 5, 6, 7, 8, 7, 7]);
console.log( unique.add({ name: "Aditya" }))
console.log(unique.add({ name: "Aditya" }))
console.log(unique.add({ name: "Parmar" }))


unique.forEach((value) => {
    console.log(value)
})

for (const i of unique) {
    console.log(i);
}

console.log(unique.values());



console.log(unique.has(-1))
console.log(unique.has(8))
console.log(unique.delete(-1))
console.log(unique.delete(5))
console.log(unique.clear())
console.log(unique)

