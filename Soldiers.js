const Units = require('./Units');

module.exports =  class Soldiers extends Units{
  constructor(recharge) {
    super(recharge);
    this.experience = 0;
    this.active = true;
  }

  attack() {
    return 0.5 * (1 + this.health / 100) * Math.random(30 + this.experience, 100) / 100;
  }

  damage() {
    return 0.05 + this.experience / 100;
  }

  kill() {
    this.active = false;
    this.health = 0;
    this.experience = 0;
  }

  startRecharging() {
    setTimeout(() => {
      // Attack
    }, this.recharge);
  }
  
}
