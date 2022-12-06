export default class Character {
  constructor(name, type) {
    if (name.length < 2) {
      throw new Error('Длина имени персонажа не может быть короче 2ух символов');
    }
    if (name.length > 10) {
      throw new Error('Длина имени персонажа не может быть длинее 10ти символов');
    }
    const allType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!allType.includes(type)) {
      throw new Error('Неправильный тип персонажа. Выберите другой');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
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
