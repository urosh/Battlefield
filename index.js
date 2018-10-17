class Units {
  constructor(recharge) {
    if(isNaN(parseInt(recharge))) {
      throw new Error('Unit recharge time should be a number');
    }

    if(recharge < 100 || recharge > 2000) {
      throw new Error('Unit recharge time should be in range between 100 and 2000');
    }

    this.health = 100;
    this.recharge = recharge;
  }
}


class Soldiers extends Units{
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

const gavg = items => Math.pow(items.reduce((cur, next) => cur * next, 1) , 1 / items.length);


class Vehicles extends Units{
  constructor(recharge, operators) {
    super(recharge);
    if(recharge < 1000) {
      throw new Error('Recharge time for vehicles must be greater than 1000');
    }

    if(isNaN(parseInt(operators))) {
      throw new Error('Vehicle number of operators must be a number');
    }

    if(operators < 1 || operators > 3) {
      throw new Error('Vehicle number of operators must be in range between 1 and 3');
    }

    this.operators = operators;
    this.operatorUnits = [];
    this.active = true;
  }

  checkIfActive() {
    return this.health > 0 && this.operators > 0;
  }

  attack() {
    return 0.5 * (1 + this.health / 100) * gavg(this.operatorUnits.map(operator => operator.attack()))
  }

  damage() {
    return 0.1 + this.operatorUnits.map(operator => operator.experience).reduce((cur, next) => cur / 100 + next / 100, 0)
  }

}

class Squads {
  constructor(strategy) {
    this.strategy = strategy;
    this.units = [];
    this.active = true;
  }
}

const unit = new Units(100);

const soldier = new Soldiers(120);
