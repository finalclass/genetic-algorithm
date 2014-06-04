/// <reference path="typings/node/node.d.ts" />
/// <reference path="typings/genetic-algorithm/interfaces.d.ts" />

import Population = require('./Population');
import Randomizer = require('./Randomizer');

class PopulationCrossover {

  constructor(
    private crossoverOperator:ICrossoverOperator, 
    private crossoverProbability:number,
    private randomizer:IRandomizer = new Randomizer()) {
  }

  crossover(population:IPopulation) {
    var nextGeneration:IPopulation = new Population();
    var children:ICreaturePair;

    for (var p = 0; p < population.creatures.length - 1; p += 2) {
      var parent1:any = population.creatures[p];
      var parent2:any = population.creatures[p + 1];
      var rand = this.randomizer.random();

      if (this.crossoverProbability < rand) {
        children = this.crossoverOperator.execute(parent1, parent2);
      } else {
        children = {
          creature1: parent1.clone(),
          creature2: parent2.clone()
        };
      }

      nextGeneration.creatures.push(children.creature1);
      nextGeneration.creatures.push(children.creature2);
    }

    //if population size is an odd number
    if (nextGeneration.creatures.length < population.creatures.length) {
      //add last individual from the previous population
      nextGeneration.creatures.push(population.creatures[population.creatures.length - 1]);
    }


    return nextGeneration;
  }

}

export = PopulationCrossover;