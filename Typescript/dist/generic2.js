class D {
    add(v) {
        throw new Error("Method not implemented.");
    }
    get() {
        throw new Error("Method not implemented.");
    }
}
class LocalDB {
    constructor(localStorageKey) {
        this.localStorageKey = localStorageKey;
    }
    add(v) {
        localStorage.setItem(this.localStorageKey, v.seriealize());
    }
    get() {
        const v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v) : null;
    }
}
const cart1 = {
    getItem() {
        return {
            m: ''
        };
    }
};
cart1.getItem();
//# sourceMappingURL=generic2.js.map