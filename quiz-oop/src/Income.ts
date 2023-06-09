import { Vechile } from "./Vechile";

export class Income extends Vechile {
  private transactionDate: Date;
  private rent: Number;
  private driver: Number;
  private order: Number;
  private orderPerKm: Number;
  private total: Number;

  constructor(
    noPolice: String,
    vechileType: String,
    year: number,
    seat: Number,
    price: Number,
    tax: Number,
    transactionDate: Date,
    rent: Number,
    driver: Number,
    order: Number,
    orderPerKm: Number,
    total: Number
  ) {
    super(noPolice, vechileType, year, seat, price, tax);
    this.transactionDate = transactionDate;
    this.rent = rent;
    this.driver = driver;
    this.order = order;
    this.orderPerKm = orderPerKm;
    this.total = total;
  }

  getTransactionDate(): Date {
    return this.transactionDate;
  }

  getRent(): Number {
    return this.rent;
  }

  getDriver(): Number {
    return this.driver;
  }

  getOrder(): Number {
    return this.order;
  }
  getOrderPerKm(): Number {
    return this.orderPerKm;
  }
  getTotal(): Number {
    return this.total;
  }

  setTransactionDate(transactionDate: Date): void {
    this.transactionDate = transactionDate;
  }

  setRent(rent: Number): void {
    this.rent = rent;
  }

  setOrder(order: Number): void {
    this.order = order;
  }

  setOrderPerKm(orderPerKm: Number): void {
    this.orderPerKm = orderPerKm;
  }

  setTotal(total: Number): void {
    this.total = total;
  }
}
