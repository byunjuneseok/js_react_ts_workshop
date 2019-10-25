function increaseAndPrint(n, callback) {
    setTimeout(() => {
        const increased = n + 1;
        console.log(increased);
        if (callback) {
            callback(increased);
        }
    }, 1000)
}

// increaseAndPrint(0, n => {
//     increaseAndPrint(n, n => {
//         increaseAndPrint(n, n => {
//             increaseAndPrint(n, n => {
//                 console.log("job is done.");
//             })
//         })
//     })
// });

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('result');
    }, 1000)
});

// myPromise.then(result => {
//     console.log(result)
// })

function increaseAndPrintP(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = n + 1;
            if (value === 5) {
                const error = new Error();
                error.name = 'ValueIsFiveError';
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        }, 1000);
    });
}

// increaseAndPrintP(0).then(n => {
//     return increaseAndPrintP(n);
// }).then(n => {
//     return increaseAndPrintP(n);
// }).then(n => {
//     return increaseAndPrintP(n);
// }).then(n => {
//     return increaseAndPrintP(n);
// }).catch(e => {
//     console.error(e);
// })

increaseAndPrintP(0)
    .then(increaseAndPrintP)
    .then(increaseAndPrintP)
    .then(increaseAndPrintP)
    .then(increaseAndPrintP)
    .catch(e => {
        console.error()
    })