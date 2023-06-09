"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoSummary = void 0;
const Vechile_1 = require("./Vechile");
class InfoSummary {
    //   totalIncome: Number;
    constructor() {
        this.vechiles = [];
        //     this.totalIncome = totalIncome;
    }
    addVechile(vechile) {
        this.vechiles.push(vechile);
    }
    getTotalVechile() {
        return this.vechiles.length;
    }
}
exports.InfoSummary = InfoSummary;
const vechile = new Vechile_1.Vechile("D 1001 UM", "SUV", 4, 2010, 350000000, 3500000);
