import fs from 'node:fs/promises';

const create = async () => {
    // Write your code here

    let file_exists = true;

    try {
        await fs.stat('./files/fresh.txt');
    } catch (err) {
        if (err.code == 'ENOENT') {
            file_exists = false;
        }
    }

    if (!file_exists) {
        await fs.writeFile('./files/fresh.txt', 'I am fresh and young');
    } else {
        throw Error('FS Operation failed');
    }
};

await create();