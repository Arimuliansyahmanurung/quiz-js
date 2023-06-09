export class Purchase {
  protected price: Number;
  protected tax: Number;

  constructor(price: Number, tax: Number) {
    this.price = price;
    this.tax = tax;
  }

  getPrice(): Number {
    return this.price;
  }

  getTax(): Number {
    return this.tax;
  }

  setPrice(price: Number): void {
    this.price = price;
  }

  setTax(tax: Number): void {
    this.tax = tax;
  }
}
