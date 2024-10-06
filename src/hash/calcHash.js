import crypto from 'crypto';

const calculateHash = async () => {
    // Write your code here 

    let hex_crypt = crypto.createHash('sha256').update('salom', 'utf-8').digest('hex');
    console.log(hex_crypt);

    // I will do streams api later

};

await calculateHash();