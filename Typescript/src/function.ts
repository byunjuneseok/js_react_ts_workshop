function add (x: number, y: number): number {
    return x + y;
}

// add(1, "2");

const result:number = add(1, 2);

function buildUserInfo(name = "-", email?: string) {
    return { name, email };
}

const user = buildUserInfo();

const add2 = (a: number, b: number): number => a + b;

interface Storage {
    a: string;
}

interface ColdStorage {
    b: string;
}

// overload signature
function store(type: "canFood"): Storage
function store(type: "icecream"): ColdStorage

function store(type: "canFood"|"icecream") {
    if (type === "canFood") {
        return {a: "canFood"};
    }
    else if (type === "icecream") {
        return {b: "icecream"};
    }
    else {
        throw new Error('unsupported type');
    }
}

const s = store("canFood");