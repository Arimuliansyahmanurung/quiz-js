"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.summary = void 0;
const Vechile_1 = require("./Vechile");
const Summary_1 = require("./Summary");
__exportStar(require("./addVechile"), exports);
const vechile1 = new Vechile_1.Vechile("D 1001 UM", "SUV", 2010, 4, 350000000, 3500000);
const vechile2 = new Vechile_1.Vechile("D 1002 UM", "SUV", 4, 2010, 350000000, 3500000);
const vechile3 = new Vechile_1.Vechile("D 1003 UM", "SUV", 5, 2015, 350000000, 3500000);
const vechile4 = new Vechile_1.Vechile("D 1004 UM", "SUV", 5, 2015, 350000000, 3500000);
const vechile5 = new Vechile_1.Vechile("D 11 UK", "Taxi", 4, 2002, 175000000, 1750000);
const vechile6 = new Vechile_1.Vechile("D 12 UK", "Taxi", 4, 2015, 225000000, 2250000);
const vechile7 = new Vechile_1.Vechile("D 13 UK", "Taxi", 4, 2020, 275000000, 2750000);
const vechile8 = new Vechile_1.Vechile("ID8089", "PrivatJet", 12, 2015, 150000000000, 1500000000);
const vechile9 = new Vechile_1.Vechile("ID8099", "PrivateJet", 15, 2018, 175000000000, 1750000000);
exports.summary = new Summary_1.InfoSummary();
exports.summary.addVechile(vechile1);
exports.summary.addVechile(vechile2);
exports.summary.addVechile(vechile3);
exports.summary.addVechile(vechile4);
exports.summary.addVechile(vechile5);
exports.summary.addVechile(vechile6);
exports.summary.addVechile(vechile7);
exports.summary.addVechile(vechile8);
exports.summary.addVechile(vechile9);
console.log(`Total Vechile : ${exports.summary.getTotalVechile()}`);
