/// <reference path="node.d.ts" />
/// <reference path="interfaces.d.ts" />

import Population = require('./Population');
import TournamentPreselection = require('./operators/TournamentPreselection');

class Evolver implements IEvolver {

  private preselection:IPreselection;
  private crossover:

  constructor(private settings:ISettings) {
    this.preselection = new TournamentPreselection(settings.creatureBuilder);
  }

  public evolve() {
    var population:IPopulation = new Population(this.settings.creatureBuilder, this.settings.populationSize);

    population.populate();
    
    for (var i = 0; i < this.settings.iterations; i += 1) {
      population = this.preselection.preselect(population);
    }
  }

}

export = Evolver;