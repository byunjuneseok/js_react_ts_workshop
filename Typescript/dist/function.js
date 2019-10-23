function add(x, y) {
    return x + y;
}
const result = add(1, 2);
function buildUserInfo(name = "-", email) {
    return { name, email };
}
const user = buildUserInfo();
const add2 = (a, b) => a + b;
function store(type) {
    if (type === "canFood") {
        return { a: "canFood" };
    }
    else if (type === "icecream") {
        return { b: "icecream" };
    }
    else {
        throw new Error('unsupported type');
    }
}
const s = store("canFood");
//# sourceMappingURL=function.js.map