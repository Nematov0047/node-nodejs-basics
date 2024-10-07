import fs from 'node:fs/promises';

const remove = async () => {
    // Write your code here 

    let file_exists = true;

    try {
        await fs.stat('./files/fileToRemove.txt');
    } catch (err) {
        if (err.code == 'ENOENT') {
            file_exists = false;
        }
    }

    if (!file_exists) {
        throw Error('FS Operation failed');
    }

    await fs.unlink('./files/fileToRemove.txt');

};

await remove();