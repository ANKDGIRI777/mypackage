class Employee {
  id: number;
  firstName: string;
  lastName: string;

  constructor(id: number, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

// create Employee class object
let employee = new Employee(
  100,
  "Rghdrhretherhrhrthrthrjrtjerttjwerwerwrwerwerwerrthrthrthrthrthrethrtehrthrethrthrtamesh",
  "Falkgrhfeorgherilouughreopighwerwerjeorighjoeirrjgoeirjgoe;rigjoerjgop;eirjg;eopirgjoe;ridatare"
);
console.log(employee);
console.log(employee.getFullName());
