import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Provide a path to a csv file: ', (answer) => {
    console.log(`file: ${answer}`);

    rl.close();
});