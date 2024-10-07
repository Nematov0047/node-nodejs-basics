import fs, { read } from 'node:fs';
import readline from 'node:readline';

const write = async () => {
    // Write your code here

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Write something, we save it:  ', (something) => {
        let fileToWrite = fs.createWriteStream('./files/fileToWrite.txt');
        fileToWrite.write(something);
        rl.close();
    })

};

await write();