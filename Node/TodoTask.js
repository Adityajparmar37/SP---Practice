const repl = require("repl");
const fs = require("fs");

const replInstance = repl.start({ prompt: ">Todo_cli " })


console.log(`\nOperations

 .add : to add todos
 .list : to view all todos
 .remove : to remove todos
 .update : to update any todos (Provide Todo Number)

NOTE: BEFORE START PLEASE PRESS ENTER

`)

replInstance.defineCommand("list", {
    help: "List all todos",
    action(fileName) {
        fs.readFile(`./${fileName}.txt`, "utf-8", (err, data) => {
            console.log("Your Todos are ... ", data);
        });
        this.displayPrompt();
    }
})


replInstance.defineCommand("add", {
    help: "Add todo",
    action(argument) {
        const [fileName, newTodo] = argument.split(" ")
        const newData = newTodo+"\n" 
        const add = fs.writeFile(`./${fileName}.txt`, newData , { flag: "a" }, (err, data) => {
            console.log(" Todo Added Successfully")
        });
        this.displayPrompt();
    }
})


replInstance.defineCommand("remove", {
    help: "Remove todo",
    action (argument){
        const [fileName, number] = argument.split(" ")
        // console.log(fileName,number);
        // let newTodoList;
        const data = fs.readFileSync(`./${fileName}.txt`, "utf-8");
        const filterData = data.split("\n").filter((todo) => !todo.startsWith(number));

        if (filterData) {
            fs.writeFile(`./${fileName}.txt`, filterData.join("\n"), (err, data) => {
                console.log(` ${number} todo is remove`)
            });
        }
        this.displayPrompt();
    }
})

replInstance.defineCommand("update", {
    help: "update todo",
    action (argument){
        const [fileName, number, newDataOfTodo] = argument.split(" ")
        // console.log(fileName, number, newDataOfTodo);
        let newTodoList;
        const data = fs.readFileSync(`./${fileName}.txt`, "utf-8");
        let fileData = data.split("\n")
        const filterData = fileData.filter((todo) => todo.startsWith(number));

        if (filterData) {
            const index = fileData.indexOf(filterData.toString());
            fileData.splice(index, 1, `${index+1}.${newDataOfTodo}`);
            console.log(index)
        }

        console.log(fileData);

        if (filterData) {
            fs.writeFile(`./${fileName}.txt`, fileData.join("\n"), (err, data) => {
                console.log(` ${number} todo is update`)
            });
        }
        this.displayPrompt();
    }
})


replInstance.on('exit', () => {
    console.log('Thanks for using REPL');
    process.exit
})

