function work(callback) {
    setTimeout(() => {
        // work at background
        const start = Date.now();
        for (let i = 0; i < 100000000; i++) {}
        const end = Date.now();
        // console.log(end - start + 'ms');
        callback(end - start);
    }, 0)
}

console.log('start work.');
work((ms) => {
    console.log('work is done.');
    console.log(ms + 'ms.')
});
console.log('next work.');