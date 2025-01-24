const repl = require("repl")
const fs = require("fs");
const replInstance = repl.start({ prompt: '>MyREPL ' });


replInstance.context.greet = (name) => `Hello from context ${name}`


replInstance.defineCommand('sayHello', {
    help: "Say Hello to world",
    action(name) {
        console.log(`Hello, ${name}`);
        this.displayPrompt();
    }
})

replInstance.defineCommand('enterFile', {
    help: "Enter File Name To Read",
    action(fileName) {
        const data = fs.readFile(`./${fileName}`, "utf-8", (err, data) => {
            console.log(data);
        });
        this.displayPrompt();
    }
})


replInstance.on('exit', () => {
    console.log('Thanks for using REPL');
    process.exit
})