interface DB<T> {
    add(v: T): void;

    get(): T;
}

class D<T, U> implements DB<T> {
    add(v: T): void {
        throw new Error("Method not implemented.");
    }    
    get(): T {
        throw new Error("Method not implemented.");
    }
}

interface JSONSerializer {
    seriealize(): string;
}

class LocalDB<T extends JSONSerializer> implements DB<T> {
    constructor(private localStorageKey: string) {
    }

    add(v: T) {
        localStorage.setItem(this.localStorageKey, v.seriealize());
    }

    get(): T {
        const v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v) : null;
    }
}

interface User {
    name: string
}

const userDb = new LocalDB<User>('user');
userDb.add({ name: 'jay' });
const userA = userDb.get();
