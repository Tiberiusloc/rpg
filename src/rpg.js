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
  console.log(damage + " This is damage")
  console.log(this.attack + " This is this.attack")
  console.log(finalDamage + "This is finalDamage line 20")
  return finalDamage
}
defend(attackDamage) {
  console.log(attackDamage + " This is attackDamage")
  let finalDamage = attackDamage - this.defense;
  console.log(this.defense + " This is this.defense")
  console.log(finalDamage + " This finalDamage line 27")
  return finalDamage
}
hpLoss(finalDamage) {
  console.log(finalDamage)
  return this.hp -= finalDamage
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
