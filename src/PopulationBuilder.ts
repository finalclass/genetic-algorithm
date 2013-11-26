/// <reference path="node.d.ts" />
/// <reference path="interfaces.d.ts" />

class PopulationBuilder {

  constructor (public creatureBuilder:ICreatureBuilder, public populationSize:number) {

  }

  buildNewPopulation() : ICreature[] {
    var population:ICreature[] = [];

    for (var i = 0; i < this.populationSize; i += 1) {
      population.push(this.cre)
    }

    return population;
  }

}

export = PopulationBuilder;