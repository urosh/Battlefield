module.exports = class Squads {
  constructor(strategy, numberOfUnits) {
    this.strategy = strategy;
    this.units = [];
    this.active = true;

    if(isNaN(parseInt(numberOfUnits))) {
      throw new Error('Number of units per squad must be a number');
    }

    if(operators < 1 || operators > 3) {
      throw new Error('Vehicle number of operators must be in range between 1 and 3');
    }

    // Here we will create units based on the inputs
  }

  addUnit(unit) {
    this.units.push(unit);
  }
}