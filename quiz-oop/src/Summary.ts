import { Vechile } from "./Vechile";
import { Purchase } from "./Purchase";
import { Income } from "./Income";

interface Summary {
  vechiles: Vechile[];
  //   totalIncome: Number;

  getTotalVechile(): Number;
}

export class InfoSummary implements Summary {
  vechiles: Vechile[];
  //   totalIncome: Number;

  constructor() {
    this.vechiles = [];
    //     this.totalIncome = totalIncome;
  }
  addVechile(vechile: Vechile): void {
    this.vechiles.push(vechile);
  }
  getTotalVechile(): Number {
    return this.vechiles.length;
  }
}
