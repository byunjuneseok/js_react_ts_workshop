// 타입을 parameter 화 할 수 있다. GENERIC. #타입변수
function createPromise<T>(x: T, timeout: number) {
    return new Promise<T>((resolve, reject) => {
        setTimeout( () => {
            resolve(x);
        }, timeout);
    });
}

createPromise("doh!", 100)
    .then(v => console.log(v));

createPromise<string>("doh!", 100)
    .then(v => console.log(v));

function createTuple2<T, U>(v: T, v2: U): [T, U] {
    return [v, v2];
}

function createTuple3<T, U, V>(v: T, v2: U, v3: V): [T, U, V] {
    return [v, v2, v3];
}

const t1 = createTuple2("user1", 1000);

