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
        localStorage.setItem(this.localStorageKey, JSON.stringify(v));
    }
    get() {
        const v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v) : null;
    }
}
const userDb = new LocalDB('user');
userDb.add({ name: 'jay' });
const userA = userDb.get();
//# sourceMappingURL=generic2.js.map