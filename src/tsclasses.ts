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
  "Jdasdaadasdasdsadhasidghwaifywosfhsal;dfgnas;dlfnadhafnal;ksfnoa;gjtp'wajfgp'awjgp'wajg'pwagjkp'rwjgk'prwjg'apwjgprjgpo;rjgo;irrjgoilrsjgo;isrrgjaops;ftusfsfgfgdfgsdggdqweqwefgfrftwe'priuw'epofjkpw'ekrwerwarawef'w;ekf;'ekf['pewkf['pwekf[paeskf[sdasanf;l'vkbdfpogkepogkpofkgpogk[p'okg['dfskgp['odfkg[p'okgp['dskgpdofkg['odpfkgpodfkgp'df[ogkp['dofkg'dfskg['dfopfrtwerwerk[p'dfgkpe"
);
console.log(person.getName());
