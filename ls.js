var fs = require('fs');

const displayLs = fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
        throw err;
    }
    else {
        process.stdout.write(files.join('\n'));
        process.stdout.write("prompt > \n");
    }
})


module.exports = {displayLs};