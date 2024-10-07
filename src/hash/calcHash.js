import { createHash } from 'crypto';
import { createReadStream, read } from 'fs';
import { pipeline } from 'stream';

const calculateHash = async () => {
    // Write your code here 

    const hash = createHash('sha256');
    const input = createReadStream('./files/fileToCalculateHashFor.txt');

    pipeline(input, hash, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(hash.read().toString('hex'));
        }
    })


};

await calculateHash();