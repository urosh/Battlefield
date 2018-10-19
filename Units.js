module.exports = class Units {
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
