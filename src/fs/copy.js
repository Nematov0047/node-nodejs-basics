import fs from 'node:fs/promises';

const copy = async () => {
    // Write your code here 
    let files;
    try {
        files = await fs.readdir('./files');
    } catch (err) {
        console.error('FS Operation failed');
        return;
    }
    try {
        await fs.mkdir('files_copy');
        files.map((file) => {
            fs.copyFile('./files/' + file, './files_copy/' + file);
        })
    } catch (err) {
        if (err.code == 'EEXIST') {
            console.error('FS Operation failed');
        } else {
            console.error(err);
        }
    }
};

await copy();
