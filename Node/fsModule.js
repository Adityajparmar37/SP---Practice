// const fs = require("fs");

// console.log("first")
// const fileData = fs.readFileSync("./Todos.txt", "utf-8");
// console.log(fileData);

// console.log("second");

// const fileData2 = fs.readFile("./Todos.txt", "utf-8", (err, data) => {
//     try {
//         console.log(data)
//     } catch (err) {
//         console.log(err);
//     }
// });
// console.log(fileData2);

// console.log("third");


// fs.writeFileSync("./Todos.txt", "4.d", { flag: "a" });


const fsProm = require("fs/promises");

// async function readFile() {
//     try {
//         const data = await fsProm.readFile("./Todos.txt", "utf-8");
//         console.log(data)
//     } catch (err) {
//         console.log(err);
//     }
// }

// readFile()

async function writeFile() {
    try {
        
        await fsProm.writeFile("./Todos.txt", "\n4. d", {flag:"a"});
        const data = await fsProm.readFile("./Todos.txt", "utf-8");
        console.log(data)
    } catch (err) {
        console.log(err);
    }
}

writeFile()