function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async() => {
    await sleep(1000);
    return 'dog!';
}

const getRabbit = async() => {
    await sleep(500);
    return 'rabbit!';
}

const getTurtle = async() => {
    await sleep(3000);
    return 'turtle';
}

async function process() {
    const start = Date.now()
    const results = await Promise.all([getDog(), getRabbit(), getTurtle()]);
    console.log(results);
    const end = Date.now();
    //     const dog = await getDog();
    //     console.log(dog);
    //     const rabbit = await getRabbit();
    //     console.log(rabbit);
    //     const turtle = await getTurtle();
    //     console.log(turtle);
    // 

    console.log(end - start);
}

process();

async function process2() {
    const start = Date.now()
        // const results = await Promise.all([getDog(), getRabbit(), getTurtle()]);
        // const dog = results[0];
        // const rabbit = results[1];
        // const turtle = results[2];
    const [dog, rabbit, turtle] = await Promise.all([getDog(), getRabbit(), getTurtle()]);
    console.log(dog);
    console.log(rabbit);
    console.log(turtle);
    const end = Date.now();

    console.log(end - start);
}

process2();

async function process3() {
    const start = Date.now()
    const first = await Promise.race([getDog(), getRabbit(), getTurtle()]);
    console.log(first);
    const end = Date.now();

    console.log(end - start);
}

process3();