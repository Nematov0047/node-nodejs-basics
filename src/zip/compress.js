import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';

const compress = async () => {
    // Write your code here 

    const gzip = createGzip();
    const source = createReadStream('./files/fileToCompress.txt');
    const destination = createWriteStream('./files/archive.gz');

    pipeline(source, gzip, destination, (err) => {
        if (err) {
            console.error('An error occured: ', err);
        }
    });

};

await compress();