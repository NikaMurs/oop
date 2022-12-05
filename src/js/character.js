export default class Character {
  constructor(name, type) {
    if (name.length < 2) {
      throw new Error('Name must be longer');
    }
    if (name.length > 10) {
      throw new Error('Name must be shorter');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Character is dead');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
