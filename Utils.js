module.exports =  {
  checkConfig: (config) => {
    if(!config.hasOwnProperty('numberOfArmies')) {
      throw new Error('Battlefiedld configuration missing number of armies');
    }
  
    if(isNaN(parseInt(config.numberOfArmies))) {
      throw new Error('Battlefield number of armies must be number');
    }
    
    if(config.numberOfArmies < 2) {
      throw new Error('Battlefield number of armies must be greater than 2');
    }
  
    if(!config.hasOwnProperty('numberOfSquadsPerArmy')) {
      throw new Error('Battlefiedld configuration missing number of squads per army');
    }
  
    if(isNaN(parseInt(config.numberOfSquadsPerArmy))) {
      throw new Error('Battlefield number of squads must be number');
    }
    
    if(config.numberOfSquadsPerArmy < 2) {
      throw new Error('Battlefield number of squads must be greater 2 ');
    }

    if(!config.hasOwnProperty('numberOfUnitsPerSquad')) {
      throw new Error('Battlefiedld configuration missing number of squads per units');
    }
  
    if(isNaN(parseInt(config.numberOfUnitsPerSquad))) {
      throw new Error('Battlefield number of units per squad be number');
    }
    
    if(config.numberOfUnitsPerSquad > 10 || config.numberOfUnitsPerSquad  < 5) {
      throw new Error('Battlefield number of units per squad  must be greater 4 and less than 11 ');
    }

    if(!Array.isArray(config.strategies)) {
      throw new Error('Battlefield strategies must be array');
    }
    
    if(config.strategies.length !== 3) {
      throw new Error('Battlefield strategies must have 3 members');
    }
    
    return true;
  }
}