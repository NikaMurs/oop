import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

const characterBowerman = new Bowman('bow1');
const characterDaemon = new Daemon('dea2');
const characterMagician = new Magician('mag3');
const chracterSwordsman = new Swordsman('swo4');
const characterUndead = new Undead('und5');
const characterZombie = new Zombie('zom6');

test.each([
  ['name', characterBowerman.name, 'bow1'],
  ['type', characterBowerman.type, 'Bowman'],
  ['health', characterBowerman.health, 100],
  ['level', characterBowerman.level, 1],
  ['attack', characterBowerman.attack, 25],
  ['defence', characterBowerman.defence, 25],
])('bowmen test %s', (__, el, expected) => {
  expect(el).toBe(expected);
});

test.each([
  ['name', characterDaemon.name, 'dea2'],
  ['type', characterDaemon.type, 'Daemon'],
  ['health', characterDaemon.health, 100],
  ['level', characterDaemon.level, 1],
  ['attack', characterDaemon.attack, 10],
  ['defence', characterDaemon.defence, 40],
])('get Daemon class property %s', (_, property, exp) => {
  expect(property).toBe(exp);
});

test.each([
  ['name', characterMagician.name, 'mag3'],
  ['type', characterMagician.type, 'Magician'],
  ['health', characterMagician.health, 100],
  ['level', characterMagician.level, 1],
  ['attack', characterMagician.attack, 10],
  ['defence', characterMagician.defence, 40],
])('get Magician class property %s', (_, property, exp) => {
  expect(property).toBe(exp);
});

test.each([
  ['name', chracterSwordsman.name, 'swo4'],
  ['type', chracterSwordsman.type, 'Swordsman'],
  ['health', chracterSwordsman.health, 100],
  ['level', chracterSwordsman.level, 1],
  ['attack', chracterSwordsman.attack, 40],
  ['defence', chracterSwordsman.defence, 10],
])('get Swordsman class property %s', (_, property, exp) => {
  expect(property).toBe(exp);
});

test.each([
  ['name', characterUndead.name, 'und5'],
  ['type', characterUndead.type, 'Undead'],
  ['health', characterUndead.health, 100],
  ['level', characterUndead.level, 1],
  ['attack', characterUndead.attack, 25],
  ['defence', characterUndead.defence, 25],
])('get Undead class property %s', (_, property, exp) => {
  expect(property).toBe(exp);
});

test.each([
  ['name', characterZombie.name, 'zom6'],
  ['type', characterZombie.type, 'Zombie'],
  ['health', characterZombie.health, 100],
  ['level', characterZombie.level, 1],
  ['attack', characterZombie.attack, 40],
  ['defence', characterZombie.defence, 10],
])('get Zombie class property %s', (_, property, exp) => {
  expect(property).toBe(exp);
});

test('create character with short name', () => {
  expect(() => {
    const character = new Bowman('a');
    character.levelUp();
  }).toThrow();
});

test('create character with long name', () => {
  expect(() => {
    const character = new Bowman('abcdefghijklm');
    character.levelUp();
  }).toThrow();
});

test('create character with wrong type', () => {
  expect(() => {
    const character = new Bowman('bow1', 'incorrectType');
    character.levelUp();
  }).toThrow();
});

test('LevelUp check', () => {
  const character = new Bowman('bow1');
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.attack).toBe(30);
  expect(character.defence).toBe(30);
  expect(character.health).toBe(100);
});

test('Damage check', () => {
  const character = new Bowman('bow1');
  character.damage(50);
  expect(character.health).toBe(62.5);
});

test('LevelUp with dead char checking', () => {
  const character = new Bowman('bow1');
  character.health = 0;
  expect(() => character.levelUp()).toThrow();
});

test('health after damage >0', () => {
  const character = new Bowman('bow1');
  character.health = 2;
  character.damage(50);
  expect(character.health).toBe(0);
});
