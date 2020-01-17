const promisify = () => {
    return new Promise((fulfill) => {
        setTimeout(() => {
            fulfill('FULFILLED!')
        }, 300);
    }).then(console.log)
}

// promisify().then(console.log);

module.exports = promisify;