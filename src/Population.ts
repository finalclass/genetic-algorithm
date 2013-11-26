/// <reference path="node.d.ts" />
/// <reference path="interfaces.d.ts"/>

class Population implements IPopulation {

  public size:number;
  
  public creatures:ICreature[];

  constructor(
    public creatureBuilder:ICreatureBuilder,
    populationSize:number) {

    this.size = populationSize;
  }

  public populate() : void {
    for (var i = 0; i < this.size; i += 1) {
      this.creatures.push(this.creatureBuilder.execute());
    }
  }
}

export = Population;