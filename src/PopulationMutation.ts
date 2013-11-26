/// <reference path="node.d.ts" />
/// <reference path="interfaces.d.ts" />

import Randomizer = require('./Randomizer');
import Population = require('./Population');

class PopulationMutation {

  constructor(
    private mutationOperator:IMutationOperator,
    private mutationProbability:number,
    private randomizer:Randomizer = new Randomizer()) {
  }

  mutate(population:IPopulation) : IPopulation {
    var nextGeneration:IPopulation = new Population();

    for (var p = 0; p < population.creatures.length; p += 1) {
      var creature = population.creatures[p];
      var rand = this.randomizer.random();
      var mutated:ICreature;

      if (rand < this.mutationProbability) {
        nextGeneration.creatures.push(this.mutationOperator.execute(creature));
      } else {
         nextGeneration.creatures.push(creature.clone());
      }
    }

    return nextGeneration;
  }

}

export = PopulationMutation;