// ES6 부터 처음 등장한 
interface User {
    name: string;
}

interface Product {
    id: string;
    price: number;
}

class Cart {
    // protected user: User;
    private store: object;
    constructor(protected user: User) { 
        // this.user = user;
        this.store = {};
    }
    public put (id: string, product: Product) {
        this.store[id] = product;
    }
    get (id: string) {
        return this.store[id];
    }
}

class PromotionCart extends Cart {
    addPromotion() {
        this.user;
        // this.store;
    }
}

const cartJohn = new Cart({ name: 'john' });
const cartJay = new Cart({ name: 'jay' });

const cart2 = new PromotionCart({ name: 'john' })
cart2.addPromotion();
