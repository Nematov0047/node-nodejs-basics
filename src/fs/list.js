import { error } from 'node:console';
import fs from 'node:fs/promises';

const list = async () => {
    // Write your code here
    let folder_exists = true;

    try {
        await fs.stat('./files');
    } catch (err) {
        if (err.code == 'ENOENT') {
            folder_exists = false;
        }
    }

    if (!folder_exists) {
        throw Error('FS Operation failed');
    }

    const list = await fs.readdir('./files');
    console.log(list);

};

await list();