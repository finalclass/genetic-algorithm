/// <reference path="typings/node/node.d.ts" />
/// <reference path="typings/genetic-algorithm/interfaces.d.ts"/>

class Population implements IPopulation {

  public size:number;
  
  public creatures:ICreature[];

  constructor() {
    this.creatures = [];
  }

  public findBest() : ICreature {
    var best = this.creatures[0];

    for (var p = 0; p < this.creatures.length; p += 1) {
      var solution:ICreature = this.creatures[p];
      if (solution && solution.score > best.score) {
        best = solution;
      }
    }

    return best;
  }
}

export = Population;