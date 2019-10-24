function createUserAction(u, a) {
    return Object.assign(Object.assign({}, u), a);
}
const u = createUserAction({ name: 'jay' }, { do() { } });
console.log(u);
function compare(x, y) {
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
console.log([3, 2, 1].sort(compare));
console.log(["3", "2", "1"].sort(compare));
function isAction(v) {
    return v.do !== undefined;
}
function process(v) {
    if (isAction(v)) {
        v.do();
    }
    else {
        v.name;
    }
}
//# sourceMappingURL=intersection-union.js.map