export class Character {
  constructor(name, level, exp, inventory, alignment, job, hp, attack, defense, money,) {
    this.name = name;
    this.level = level;
    this.exp = exp;
    this.inventory = inventory;
    this.alignment = alignment;
    this.job = job;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.money = money;
    this.quest = [];
  }
attackRoll() {
  let damage = rollDice()
  let finalDamage = damage + this.attack;
  return finalDamage
}
defend(attackDamage) {
  let finalDamage = attackDamage - this.defense;
  return finalDamage
}
hpLoss(finalDamage) {
  this.hp -= finalDamage
  return this.hp;
}

}

export class Job {
  constructor (job, inventory) {
  this.job = job;
  this.inventory = inventory;
  }
}

export class Npc {
  constructor (name, quest) {
  this.name = name;
  this.quest = quest;
  }
  addQuest(quest) {
    quest.push(this.quest)
    }
  }

export class Merchant{
  constructor (name, inventory) {
      this.name = name;
      this.inventory = inventory;
    }
    
  }

export function rollDice() {
  let number = Math.floor((Math.random() * 6) + 1);
  return number;
}

export class Enemy {
  constructor(name, level, hp, inventory, attack) {
    this.name = name;
    this.level = level;
    this.hp = hp;
    this.inventory = inventory;
    this.attack = attack;
}
attackRoll() {
  let damage = rollDice()
  let finalEnemyDamage = damage + this.attack;
  return finalEnemyDamage;
}
}
