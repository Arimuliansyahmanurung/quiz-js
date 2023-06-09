"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purchase = void 0;
class Purchase {
    constructor(price, tax) {
        this.price = price;
        this.tax = tax;
    }
    getPrice() {
        return this.price;
    }
    getTax() {
        return this.tax;
    }
    setPrice(price) {
        this.price = price;
    }
    setTax(tax) {
        this.tax = tax;
    }
}
exports.Purchase = Purchase;
