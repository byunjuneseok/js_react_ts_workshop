class Cart {
    constructor(user) {
        this.user = user;
        this.store = {};
    }
    put(id, product) {
        this.store[id] = product;
    }
    get(id) {
        return this.store[id];
    }
}
class PromotionCart extends Cart {
    addPromotion() {
        this.user;
    }
}
const cartJohn = new Cart({ name: 'john' });
const cartJay = new Cart({ name: 'jay' });
const cart2 = new PromotionCart({ name: 'john' });
cart2.addPromotion();
//# sourceMappingURL=class.js.map