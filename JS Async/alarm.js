const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Set time(hh:mm:ss):', times => {
    console.log(`Hey there ${times}!`);
    readline.close();
});