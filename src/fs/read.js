import fs from 'node:fs/promises';

const read = async () => {
    // Write your code here
    let content;
    try {
        content = await fs.readFile('./files/fileToRead.txt');
    } catch (err) {
        if (err.code == 'ENOENT') {
            throw Error('FS Operation failed')
        }
    }
    console.log(content.toString());

};

await read();