const os = require('os');

//Returns the CPU architecture of the operating system.
//x64 -> 64 bits 
console.log(os.arch());

//Provides operating system-specific constants for errors, signals, and priorities.

// Signals are a form of inter-process communication etla ketla IPC che ae signals thai 
console.log(os.constants.signals.SIGINT);

// Returns an array of objects containing information about each CPU/core installed.
console.log(os.cpus());


// Returns the endianness of the CPU.


// Big-endian
// The most significant byte is stored first, followed by the remaining bytes in decreasing order of significance.
// Little-endian
// The least significant byte is stored first, followed by the remaining bytes in increasing order of significance

console.log(os.endianness())


//Returns the amount of free system memory in bytes
console.log(os.freemem());

console.log(os.homedir());

console.log(os.hostname());

// Returns an object listing network interfaces.
console.log(os.networkInterfaces());

console.log(os.platform());

// which version of os is install in the system
console.log(os.release());

// Returns the path of the operating system's default temporary files
console.log(os.tmpdir());


// returns the total amount of system memory in bytes
console.log(os.totalmem()/1024/1024/1024);

console.log(os.type());

//returns the system uptime in seconds
console.log(os.uptime());


//returns information about the current user, such as unername , UID, GID etc
console.log(os.userInfo());

console.log(os.version());


//sets the scheduling prioirty of a process

//parameter: pid: The process ID (default is the current process)

//priority: Integer between -20 (higest Priority) and 19 (lowest Prioirty) 
console.log("process.id", process.pid);
os.setPriority(process.pid, -8);

// returns the scheudling prioirty of a process
//pid: the process ID  
//defualt current processs rese
console.log(os.getPriority(process.pid));


