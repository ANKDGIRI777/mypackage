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
  "Jdasdaadasdasdsadhasidghwaifywosfhsal;dfgnas;dlfnadhafnal;ksfnoa;gjtp'wajfgp'awjgp'wajg'pwagjkp'rwjgk'prwjg'apwjgprjgpo;rjgo;irrjgoilrsjgo;isrrgjaops;fturftwe'priuw'epofjkpw'ekf'w;ekf;'ekf['pewkf['pwekf[paeskf[sdasane"
);
console.log(person.getName());
