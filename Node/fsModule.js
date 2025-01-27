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


// const fsProm = require("fs/promises");

// // async function readFile() {
// //     try {
// //         const data = await fsProm.readFile("./Todos.txt", "utf-8");
// //         console.log(data)
// //     } catch (err) {
// //         console.log(err);
// //     }
// // }

// // readFile()

// async function writeFile() {
//     try {
        
//         await fsProm.writeFile("./Todos.txt", "\n4. d", {flag:"a"});
//         const data = await fsProm.readFile("./Todos.txt", "utf-8");
//         console.log(data)
//     } catch (err) {
//         console.log(err);
//     }
// }

// writeFile()


// const fs = require("fs");

// const readStream = fs.createReadStream("./HTTPHeader.txt", {
//     encoding: 'utf-8',

//     // use to specify the buffer size in bytes for readin or writting of data
//     highWaterMark: 16 ,
// });

// readStream.on('data', (chunk) => {
//     console.log(`Received ${chunk.length} bytes of data`);
//     console.log(chunk);
// })

// readStream.on('error', (err) => {
//     console.log("error " , err);
// })

// readStream.on('end', () => {
//     console.log("Finised reading the file");
// })


// const writeStream = fs.createWriteStream("./Todos.txt", {
//     flags:"a",
//     encoding: "utf-8",
//     highWaterMark: 16 * 1024,
// })

// writeStream.write("hello, this is the first line.\n");
// writeStream.write("This is the second the line\n");


// writeStream.end("this is the final line", () => {
//     console.log("Finished writing to the file");
// })

// writeStream.on("error", (err) => {
//     console.log("Error ",err)
// })


// // unlink the file
// const { unlink } = require('fs/promises');

// (async function (path) {
//     console.log("path " ,path);
//     try {
//         await unlink(path);
        
//         // unlinkSync(path);

//         console.log(`Successfully deleted ${path}`);
//     } catch (err) {
//         console.log("Error ",err)
//     }
// })('../Node/Todos.txt')


// const fs = require('fs');
// const readline = require("readline");

// const fileStream = fs.createReadStream('./eventLoopNotes.txt');

// const r1 = readline.createInterface({
//     input: fileStream,
//     crlfDelay: Infinity,
// });


// // to read the file line by line in streaming manner
// r1.on("line", (line) => {
//     console.log("Line from file", line);
// })

// r1.on('close', () => {
//     console.log("Finished reading the file");
// })

// const fs = require('fs/promises');
//const fs = require('fs');

// (async () => {
//   const fileHandle = await fs.open('./output.txt', 'w');

//   const buffer1 = Buffer.from('Hello, ');
//   const buffer2 = Buffer.from('world!');

//   const { bytesWritten } = await fileHandle.writev([buffer1, buffer2], 0);

//   console.log(`Bytes written: ${bytesWritten}`);

//   await fileHandle.close();
// })();


// (async () => {
//     const fileHandle = await fs.open("./output.txt", "r");

//     const buffer1 = Buffer.alloc(10);
//     const buffer2 = Buffer.alloc(20);

//     const { bytesRead, buffers } = await fileHandle.readv([buffer1, buffer2], 0);

//     console.log(`Bytes read:${bytesRead}`)
//     console.log(`Buffer 1:`, buffer1.toString());
//     console.log(`Buffer 2:`, buffer2.toString());

//     await fileHandle.close();
// })();


// console.log(fs.existsSync("./output.txt"));


// const fs = require('fs/promises');

// (async () => {
//     try {
//         await fs.copyFile('./output.txt', './copy.txt');
//         console.log('File Copied Successfully');
//     } catch (err) {
//         console.log("Error ", err);
//     }
// })();


// (async () => {
//     try {
//         await fs.rename('output.txt', 'sample.txt');
//         console.log("File Renamed Successfully");
//     } catch (err) {
//         console.log("error ", err);
//     }
// })();


// (async () => {
//     try {
      
//         // move the file, rename the file
//     await fs.mkdir('./newdir', { recursive: true });
//     await fs.rename('./sample.txt', './newdir/destination.txt');
//     console.log('File moved successfully.');
//   } catch (err) {
//     console.error('Error:', err);
//   }
// })();


// const fs = require("fs");

// fs.watch('./HTTPHeader.txt', (eventType, filename) => {
//     if (filename) {
//         console.log(`File ${filename} has a ${eventType} event.`);
//     } else {
//         console.log(`File has a ${eventType} event`);
//     }
// })

const fs = require('fs');

// fs.stat('./newdir/destination.txt', (err, stats) => {
//     if (err) {
//         console.log("Err ", err);
//         return;
//     }

//     console.log('File Info: ', stats);
//     console.log('Is File: ', stats.isFile());
//     console.log('Is Directory: ', stats.isDirectory());
// })

fs.watchFile('./newdir/destination.txt', { interval: 1000 }, (curr, prev) => {
  console.log('File changed:');
  console.log('Previous size:', prev.size);
  console.log('Current size:', curr.size);
});
