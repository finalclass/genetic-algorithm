/// <reference path="node.d.ts" />
/// <reference path="interfaces.d.ts"/>

import TournamentPreselection = require('./TournamentPreselection');

class Population {

  private creatures:ICreature[];
  private preselection:IPreselection;

  constructor(private creatureBuilder:ICreatureBuilder, private populationSize:number) {
    this.preselection = new TournamentPreselection();
  }

  public populate() : void {
    for (var i = 0; i < this.populationSize; i += 1) {
      this.creatures.push(this.creatureBuilder.execute());
    }
  }

  public preselection() : Population {

  }

}

export = Population;