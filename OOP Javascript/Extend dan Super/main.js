class Peliharaan {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  makan() {
    return `${this.name} sedang makan!`;
  }
}

class Kucing extends Peliharaan {
  constructor(name, age, lives) {
    super(name, age);
    this.lives = lives;
  }
  suara() {
    return "Meoww";
  }
}

class Anjing extends Peliharaan {
  suara() {
    return "Guk Guk";
  }
}
