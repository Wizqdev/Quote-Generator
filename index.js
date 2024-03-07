// Importing
const express = require('express');
const config = require('./config.json');

// Initializing
const app = express();

// Setting Main Router
let mainRouter = require("./Src/index");

console.clear();
console.log("\x1b[34m  █████   █    ██  ▒█████  ▄▄▄█████▓▓█████     ▄▄▄       ██▓███   ██▓\x1b[0m");
console.log("\x1b[34m▒██▓  ██▒ ██  ▓██▒▒██▒  ██▒▓  ██▒ ▓▒▓█   ▀    ▒████▄    ▓██░  ██▒▓██▒\x1b[0m");
console.log("\x1b[34m▒██▒  ██░▓██  ▒██░▒██░  ██▒▒ ▓██░ ▒░▒███      ▒██  ▀█▄  ▓██░ ██▓▒▒██▒\x1b[0m");
console.log("\x1b[34m░██  █▀ ░▓▓█  ░██░▒██   ██░░ ▓██▓ ░ ▒▓█  ▄    ░██▄▄▄▄██ ▒██▄█▓▒ ▒░██░\x1b[0m");
console.log("\x1b[34m░▒███▒█▄ ▒▒█████▓ ░ ████▓▒░  ▒██▒ ░ ░▒████▒    ▓█   ▓██▒▒██▒ ░  ░░██░\x1b[0m");
console.log("\x1b[34m░░ ▒▒░ ▒ ░▒▓▒ ▒ ▒ ░ ▒░▒░▒░   ▒ ░░   ░░ ▒░ ░    ▒▒   ▓▒█░▒▓▒░ ░  ░░▓  \x1b[0m");
console.log("\x1b[34m ░ ▒░  ░ ░░▒░ ░ ░   ░ ▒ ▒░     ░     ░ ░  ░     ▒   ▒▒ ░░▒ ░      ▒ ░\x1b[0m");
console.log("\x1b[34m   ░   ░  ░░░ ░ ░ ░ ░ ░ ▒                              ░  ░          ░  \x1b[0m");
console.log("\x1b[34m    ░       ░        ░   ▒   ░░        ▒ ░                               \x1b[0m");
console.log("\x1b[34m                        ░ ░              ░  ░         ░  ░          ░    \x1b[0m");
console.log('\x1b[0m');
console.log('----------------------------------------------------------------------------------------')
console.log('Creator: https://github.com/Wizqdev');
console.log('Website: https://wizq.dev');
console.log('Contact: https://wizq.dev/discord');

// Setting The App Main Router
app.use(mainRouter);

// Running The App
const Port = config.Web.Port;
app.listen(Port, () => {
    console.log(`[Server] Server Is Running On Port: ${Port}`);
});
