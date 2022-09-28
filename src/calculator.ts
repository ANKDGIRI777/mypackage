enum SalaryDivision {
  // Following values could be considered in %
  Basic = 50,
  HouseRent = 30,
  Medical = 10,
  Conveyance = 10,
}

class SalaryCalculator {
  GrossSalary: number;

  constructor(GrossSalary: number) {
    this.GrossSalary = GrossSalary;
  }

  displaySalary(): void {
    let BasicSalary: number = (this.GrossSalary * SalaryDivision.Basic) / 100;
    let HouseRent: number = (this.GrossSalary * SalaryDivision.HouseRent) / 100;
    let Medical: number = (this.GrossSalary * SalaryDivision.Medical) / 100;
    let Conveyance: number =
      (this.GrossSalary * SalaryDivision.Conveyance) / 100;
    console.log("Basic Salary : " + BasicSalary);
    console.log("HouseRent : " + HouseRent);
    console.log("Medical : " + Medical);
    console.log("Conveyance : " + Conveyance);
  }
}

let salary1 = new SalaryCalculator(1000000);
let salary2 = new SalaryCalculator(50000000);

salary1.displaySalary();
salary2.displaySalary();
