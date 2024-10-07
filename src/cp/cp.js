import { spawn } from 'node:child_process';

const spawnChildProcess = async (args) => {
    // Write your code here
    const child_process = spawn('node', ['./files/script.js', ...args]);

    process.stdin.pipe(child_process.stdin);
    child_process.stdout.pipe(process.stdout);

    child_process.stderr.on('data', (data) => {
        console.log(`stderr: , ${data}`);
    });

    child_process.on('close', (code) => {
        console.log(`child process exited with code , ${code}`);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['test1', 'test2'] /* [someArgument1, someArgument2, ...] */);
