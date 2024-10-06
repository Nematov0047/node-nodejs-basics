import { createReadStream } from 'node:fs';

const read = async () => {
    // Write your code here 
    const stream = createReadStream('./files/fileToRead.txt');

    stream.pipe(process.stdout);

};

await read();