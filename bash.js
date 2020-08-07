var displayPwd = require("./pwd.js");
// var fs = require('fs');
var displayLs = require("./ls.js");


//Output a prompt
process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    let cmd = data.toString().trim(); //removes the newline
    if (cmd === "pwd") {
        displayPwd();
    }
    else if (cmd === "ls") {
        displayLs();
    }
    else {
        process.stdout.write('You typed: ' + cmd);
    }
    process.stdout.write('\nprompt > ');
});

