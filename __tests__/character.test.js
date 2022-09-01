import {Character, Job, Npc, Merchant, rollDice, Enemy} from './../src/rpg.js';
import {wizard} from './../src/jobs.js';
import {kelly} from './../src/npc.js';

describe('Character', () => {
  let player;
  beforeEach(() => {
    player = new Character("Kelly", 1, 0, ["potion"], "Chaotic Good", "Wizard", 100 , 5, 5, 0)
  });
  
  test('Should make a character with specific parameters', () => {
    expect(player.name).toEqual("Kelly");
    expect(player.level).toEqual(1);
    expect(player.exp).toEqual(0);
    expect(player.inventory).toEqual(["potion"]);
    expect(player.alignment).toEqual("Chaotic Good");
    expect(player.job).toEqual("Wizard");
    expect(player.hp).toEqual(100);
    expect(player.attack).toEqual(5);
    expect(player.defense).toEqual(5);
    expect(player.money).toEqual(0);
  });

  let kelly = new Npc ("Queen Kelly", "run");
  test('should push quest from Npc to Character array', () => {
    expect(kelly.addQuest(player.quest)).toEqual(undefined);
    expect(player.quest).toEqual(["run"]);
  });
  
  test('should randomly generate attack number between 1-6 and attack player attack damage to number', () => {
    expect(player.attackRoll()).toBeGreaterThanOrEqual(1)
    expect(player.attackRoll()).toBeLessThanOrEqual(11)
  });
    let attackDamage = 6;
  test('should take attack and minus final damage depending on defense', () => {
    expect(player.defend(attackDamage)).toEqual(1)
  });
});




describe ('Job', () => {
  let player2;
  beforeEach(() => {
    player2 = new Character("Tiberius", 1, 0, wizard.inventory, "Chaotic Evil", wizard.job, 100, 5, 5, 0 )
  });

  test('should add inventory based on job', () => {
    expect(player2.name).toEqual("Tiberius");
    expect(player2.level).toEqual(1);
    expect(player2.exp).toEqual(0);
    expect(player2.inventory).toEqual(["Starter Staff", "Starter Pointy Hat", "Starter Robes",]);
    expect(player2.alignment).toEqual("Chaotic Evil");
    expect(player2.job).toEqual("Wizard");
    expect(player2.hp).toEqual(100);
    expect(player2.attack).toEqual(5);
    expect(player2.defense).toEqual(5);
    expect(player2.money).toEqual(0);
  });
});

describe ('Npc', () => { 
  let npc;
  npc = new Npc ("Queen Kelly", ["run"]);
  test("should be able to see new NPC name and quest", () => {
    expect(npc.name).toEqual("Queen Kelly");
    expect(npc.quest).toEqual(['run']);
  });
});

describe ('Merchant', () => {
  let merchant;
  beforeEach(()=> {
  });
  test("should make a new merchant and view his inventory",() => {
    let merchant = new Merchant ("Shiesty Sean", ["420 Dankeronie"])
    expect(merchant.inventory).toEqual(['420 Dankeronie'])
  });
});

describe ('rollDice', () => {
  test('should randomly generate between 1-6', () => {
    expect(rollDice()).toBeGreaterThanOrEqual(1)
    expect(rollDice()).toBeLessThanOrEqual(6)
  });
});

describe ('Enemy', () => {
  let enemy;
  test('should make an enemy with specific parameters',() => {
    let enemy = new Enemy ("TDD", 1, 2, ["Beginner Sword"], 5);
    expect(enemy.hp).toEqual(2);
  });
});