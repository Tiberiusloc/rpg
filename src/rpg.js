export class Character {
  constructor(name, level, exp, inventory, alignment, job, hp, attack, defense, money,) {
    this.name = name
    this.level = level
    this.exp = exp
    this.inventory = inventory
    this.alignment = alignment
    this.job = job
    this.hp = hp
    this.attack = attack
    this.defense = defense
    this.money = money
    this.quest = [];
  }
  addQuest(array) {
    array.forEach((quest) => {
      this.quest.push(quest);
    })
  }
}

export class Job {
  constructor (job, inventory) {
  this.job = job
  this.inventory = inventory
  }
}

export class Npc {
  constructor (name, quest) {
  this.name = name
  this.quest = quest
  }
}