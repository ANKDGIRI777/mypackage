class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person(
  "Jdasdaadasdasdsadhasidghwaifywosfhsal;dfgnas;dlfnaops;fturftwe'priuw'epofjkpw'ekf'w;ekf;'ekf['pewkf['pwekf[paeskf[sdasane"
);
console.log(person.getName());
