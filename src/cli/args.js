const parseArgs = () => {
    // Write your code here
    let lst = process.argv;

    for (let i = 2; i < lst.length; i += 2) {
        console.log(lst[i].slice(2) + ' is ' + lst[i + 1] + ',');
    }

};

parseArgs();