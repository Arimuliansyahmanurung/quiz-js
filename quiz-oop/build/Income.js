"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Income = void 0;
const Vechile_1 = require("./Vechile");
class Income extends Vechile_1.Vechile {
    constructor(noPolice, vechileType, year, seat, price, tax, transactionDate, rent, driver, order, orderPerKm, total) {
        super(noPolice, vechileType, year, seat, price, tax);
        this.transactionDate = transactionDate;
        this.rent = rent;
        this.driver = driver;
        this.order = order;
        this.orderPerKm = orderPerKm;
        this.total = total;
    }
    getTransactionDate() {
        return this.transactionDate;
    }
    getRent() {
        return this.rent;
    }
    getDriver() {
        return this.driver;
    }
    getOrder() {
        return this.order;
    }
    getOrderPerKm() {
        return this.orderPerKm;
    }
    getTotal() {
        return this.total;
    }
    setTransactionDate(transactionDate) {
        this.transactionDate = transactionDate;
    }
    setRent(rent) {
        this.rent = rent;
    }
    setOrder(order) {
        this.order = order;
    }
    setOrderPerKm(orderPerKm) {
        this.orderPerKm = orderPerKm;
    }
    setTotal(total) {
        this.total = total;
    }
}
exports.Income = Income;
