import { Vechile } from "./Vechile";
import { InfoSummary } from "./Summary";
export * from "./addVechile";
const vechile1 = new Vechile(
  "D 1001 UM",
  "SUV",
  2010,
  4,
  350_000_000,
  3_500_000
);

const vechile2 = new Vechile(
  "D 1002 UM",
  "SUV",
  4,
  2010,
  350_000_000,
  3_500_000
);
const vechile3 = new Vechile(
  "D 1003 UM",
  "SUV",
  5,
  2015,
  350_000_000,
  3_500_000
);
const vechile4 = new Vechile(
  "D 1004 UM",
  "SUV",
  5,
  2015,
  350_000_000,
  3_500_000
);

const vechile5 = new Vechile(
  "D 11 UK",
  "Taxi",
  4,
  2002,
  175_000_000,
  1_750_000
);
const vechile6 = new Vechile(
  "D 12 UK",
  "Taxi",
  4,
  2015,
  225_000_000,
  2_250_000
);
const vechile7 = new Vechile(
  "D 13 UK",
  "Taxi",
  4,
  2020,
  275_000_000,
  2_750_000
);

const vechile8 = new Vechile(
  "ID8089",
  "PrivatJet",
  12,
  2015,
  150_000_000_000,
  1_500_000_000
);

const vechile9 = new Vechile(
  "ID8099",
  "PrivateJet",
  15,
  2018,
  175_000_000_000,
  1_750_000_000
);

export const summary = new InfoSummary();
summary.addVechile(vechile1);
summary.addVechile(vechile2);
summary.addVechile(vechile3);
summary.addVechile(vechile4);
summary.addVechile(vechile5);
summary.addVechile(vechile6);
summary.addVechile(vechile7);
summary.addVechile(vechile8);
summary.addVechile(vechile9);

console.log(`Total Vechile : ${summary.getTotalVechile()}`);
