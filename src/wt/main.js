import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
    // Write your code here
    const number_of_logical_cores = os.cpus().length;

    const newWorker = (n) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker('./worker.js', { workerData: { n: n } });

            worker.on('message', (result) => {
                resolve({
                    status: 'resolved',
                    data: result
                });
            });

            worker.on('error', () => {
                reject({
                    status: 'error',
                    data: null
                });
            })
        });
    }

    const workerPromises = [];
    for (let i = 0; i < number_of_logical_cores; i++) {
        workerPromises.push(newWorker(10 + i));
    }

    const final_results = await Promise.allSettled(workerPromises);
    console.log(final_results.map((item) => item.value));

};

await performCalculations();