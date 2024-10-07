const parseEnv = () => {
    // Write your code here 
    let envs = process.env;
    for (let name in envs) {
        console.log('RSS_' + name + '=' + envs[name] + ';')
    }

};

parseEnv();