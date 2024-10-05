import fs from 'fs/promises';

const rename = async () => {
    // Write your code here 

    let wrongExist = true;
    let properExist = true;

    try {
        await fs.stat('./files/wrongFilename.txt');
    } catch (err) {
        if (err.code == 'ENOENT') {
            wrongExist = false;
        }
    }

    try {
        await fs.stat('./files/properFilename.md');
    } catch (err) {
        if (err.code == 'ENOENT') {
            properExist = false;
        }
    }

    if (!wrongExist || properExist) {
        throw Error('FS Operation failed');
    }

    await fs.rename('./files/wrongFilename.txt', './files/properFilename.md');
};

await rename();