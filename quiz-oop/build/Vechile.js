"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vechile = void 0;
const Purchase_1 = require("./Purchase");
class Vechile extends Purchase_1.Purchase {
    constructor(noPolice, vechileType, year, seat, price, tax) {
        super(price, tax);
        this.noPolice = noPolice;
        this.vechileType = vechileType;
        this.year = year;
        this.seat = seat;
    }
    getnoPolice() {
        return this.noPolice;
    }
    getVechileType() {
        return this.vechileType;
    }
    getSeat() {
        return this.seat;
    }
    setNoPolice(noPolice) {
        this.noPolice = noPolice;
    }
    setVechileType(vechileType) {
        this.vechileType = vechileType;
    }
    setSeat(seat) {
        this.seat = seat;
    }
}
exports.Vechile = Vechile;
