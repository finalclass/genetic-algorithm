/// <reference path="node.d.ts" />
/// <reference path="interfaces.d.ts" />

import Population = require('./Population');

class Evolver implements IEvolver {

  constructor(private settings:ISettings) {

  }

  public evolve() {
    var population = new Population(this.settings.creatureBuilder, this.settings.populationSize);

    population.populate();
    
    for (var i = 0; i < this.settings.iterations; i += 1) {
      
    }
  }

}

export = Evolver;