import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';

const decompress = async () => {
    // Write your code here 
    const gunzip = createGunzip();
    const source = createReadStream('./files/archive.gz');
    const destination = createWriteStream('./files/fileToCompress2.txt');

    pipeline(source, gunzip, destination, (err) => {
        if (err) {
            console.error('An error occured: ', err);
        }
    })
};

await decompress();