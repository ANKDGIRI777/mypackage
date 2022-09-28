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
  "Jdasdaadasdasdsadhasidghwaifywosfhsal;dfgnas;dlfnadhafnal;ksfnoa;gjtp'wajfgp'awjgp'wajg'pwagjkp'rwjgk'prwjg'apwjgprjgpo;rjgo;irrjgoilrsjgo;isrrgjaops;fturftwe'priuw'epofjkpw'ekf'w;ekf;'ekf['pewkf['pwekf[paeskf[sdasanf;l'vkbdfpogkepogkpofkgpogk[p'okg['dfskgp['odfkg[p'okgp['dskgpdofkg['odpfkgpodfkgp'df[ogkp['dofkg'dfskg['dfopgk[p'dfgkpe"
);
console.log(person.getName());
