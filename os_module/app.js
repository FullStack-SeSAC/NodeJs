const os = require('os');
// console.log(os.totalmem)
// console.log(os)

let totalMemory = os.totalmem();
let freeMemory = os.freemem();
console.log(`total memory: ${totalMemory}`);
console.log(`free memory: ${freeMemory}`);