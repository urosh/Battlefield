const Soldiers = require('./Soldiers');
const Squads  = require('./Squads');
const Units  = require('./Units');
const Vehicles = require('./Vehicles');
const utils = require('./Utils');

const gavg = items => Math.pow(items.reduce((cur, next) => cur * next, 1) , 1 / items.length);


class Army {
  constructor(strategy, numberOfSquadsPerArmy, numberOfUnitsPerSquad) {
    this.squads = []
    for (let i = 0; i < this.numberOfSquadsPerArmy; i++) {
      this.squads[i] = new Squads(strategy, numberOfUnitsPerSquad);
    }
  }
  battle() {

  }
}

Army.numberOfSquadsPerArmy = 4;
Army.numberOfUnitsPerSquad = 8;

const startBattle = () => {

}
const config = {
  numberOfArmies: 4,
  strategies: [ 'random', 'weakest', 'strongest'],
  numberOfSquadsPerArmy: 4,
  numberOfUnitsPerSquad: 8
};

const armies = [];

const init = () => {
  
  if(!utils.checkConfig(config)) {
    return;
  }
  for(let i = 0; i < config.numberOfArmies; i++) {
    armies[i] = new Army(config.strategies[i], config.numberOfSquadsPerArmy, config.numberOfUnitsPerSquad);
  }

}

// const unit = new Units(100);

// const soldier = new Soldiers(120);


init();