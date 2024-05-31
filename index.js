class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  atacar() {
    if(this.type === 'mago') {
      this.atack = 'magia';
    } else if(this.type === 'guerreiro') {
      this.atack = 'espada';
    } else if(this.type === 'monge') {
      this.atack = 'artes marciais';
    } else if(this.type === 'ninja') {
      this.atack = 'shuriken';
    } else {
      this.atack = 'faca';
    }
    console.log(`o ${this.type} atacou usando ${this.atack}`);
  }
}

let mago = new Hero('guillxr', 18, 'mago');
let guerreiro = new Hero('guillxr', 18, 'guerreiro');
let monge = new Hero('guillxr', 18, 'monge');
let ninja = new Hero('guillxr', 18, 'ninja');

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
