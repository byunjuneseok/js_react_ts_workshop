interface User {
    name: string;
}

interface Action {
    do(): void;
}

// intersection
function createUserAction(u: User, a: Action): User & Action {
    return { ...u, ...a };
}

const u = createUserAction({ name: 'jay'}, { do() {} });
console.log(u)

// union type
function compare(x: string | number, y:string | number) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x === y ? 0 : x > y ? 1 : -1;
    }
    if (typeof x === 'string' && typeof y === 'string') { 
        return x.localeCompare(y);
    }
    throw Error('not supported type');
}

compare(1, 2);
compare("a", "a");
// compare("a", 1);

console.log([3, 2, 1].sort(compare));
console.log(["3", "2", "1"].sort(compare));

function isAction(v: User | Action) : v is Action {
    return (<Action>v).do !== undefined;
}

function process(v: User | Action) {
    if (isAction(v)) {
        v.do();
    }
    else {
        v.name;
    }
}