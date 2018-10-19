const Units = require('./Units');

module.exports = class Vehicles extends Units{
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
