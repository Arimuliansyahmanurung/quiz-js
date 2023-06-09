import { Purchase } from "./Purchase";

export class Vechile extends Purchase {
  private noPolice: String;
  private vechileType: String;
  private year: Number;
  private seat: Number;
  constructor(
    noPolice: String,
    vechileType: String,
    year: Number,
    seat: Number,
    price: Number,
    tax: Number
  ) {
    super(price, tax);
    this.noPolice = noPolice;
    this.vechileType = vechileType;
    this.year = year;
    this.seat = seat;
  }

  getnoPolice(): String {
    return this.noPolice;
  }

  getVechileType(): String {
    return this.vechileType;
  }

  getSeat(): Number {
    return this.seat;
  }

  setNoPolice(noPolice: String): void {
    this.noPolice = noPolice;
  }

  setVechileType(vechileType: String): void {
    this.vechileType = vechileType;
  }

  setSeat(seat: Number): void {
    this.seat = seat;
  }
}
