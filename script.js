class Character {
    constructor(name, type, health, attackPower) {
      this.name = name;
      this.type = type;
      this.health = health;
      this.attackPower = attackPower;
      this.level = 1;
    }
    
    get info() {
      return `${this.name} (${this.type}) has ${this.health} health points and is at level ${this.level}.`;
    }
    
    levelUp() {
      this.level++;
      console.log(`${this.name} leveled up to level ${this.level}!`);
    }
    
    checkHealth() {
      if (this.health <= 0) {
        this.health = 0;
        console.log(`${this.name} has been defeated!`);
      }
    }
  }
  
  class Wizard extends Character {
    constructor(name) {
      super(name, "wizard", 170, 90);
    }
    
    attack(target) {
      target.health -= this.attackPower;
      console.log(`${this.name} attacks ${target.name} with a spell (${this.attackPower} damage)`);
      
      this.levelUp();
      target.checkHealth();
    }
    
    specialMove(target) {
      target.health -= this.attackPower * 5;
      console.log(`${this.name} performs a special move on ${target.name} (${this.attackPower * 5} damage)`);
      target.checkHealth();
    }
  }
  
  class Warrior extends Character {
    constructor(name) {
      super(name, "warrior", 350, 50);
    }
    
    attack(target) {
      target.health -= this.attackPower;
      console.log(`${this.name} attacks ${target.name} with a sword (${this.attackPower} damage)`);
      
      this.levelUp();
      target.checkHealth();
    }
    
    specialMove(target) {
      target.health -= this.attackPower * 5;
      console.log(`${this.name} performs a special move on ${target.name} (${this.attackPower * 5} damage)`);
      target.checkHealth();
    }
  }
  
  const merlin = new Wizard('Merlin');
  const arthur = new Warrior('Arthur');
  
  console.log(arthur.info);
  console.log(merlin.info);
  
  merlin.attack(arthur);
  console.log(arthur.info);
  
  arthur.attack(merlin);
  console.log(merlin.info);
  
  merlin.specialMove(arthur);
  