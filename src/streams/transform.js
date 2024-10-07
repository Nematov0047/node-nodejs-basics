import { createReadStream, read } from 'node:fs';
import { stdin, stdout } from 'node:process';
import readline from 'node:readline';

const transform = async () => {
    // Write your code here 

    const rl = readline.createInterface({
        input: stdin,
        output: stdout
    });

    rl.question('Write something, then I reverse it: ', (something) => {
        let output = something.split('').reverse().join('');
        console.log(output);
        rl.close();
    });
};

await transform();