/// <reference path="../../src/node.d.ts"/>
/// <reference path="../../src/interfaces.d.ts"/>


import GeneticAlgorithm = require('../../src/GeneticAlgorithm');


class Point implements ICreature {
  public score:number;
  public x:number;
  public y:number;

  constructor() {
    this.score = 0;
    this.x = 0;
    this.y = 0;
  }

  public clone() : ICreature {
    var point = new Point();
    point.x = this.x;
    point.y = this.y;
    return point;
  }

  public randomize() : void {
    this.x = Math.random() * 100;
    this.y = Math.random() * 100;
  }
}

class CreatureBuilder implements ICreatureBuilder {
  execute() : ICreature {
    return new Point();
  }
}

class MutationOperator implements IMutationOperator {
  execute(creature:ICreature) : ICreature {
    var rand = Math.random();

    if (rand > 0.5) {
      (<Point>creature).x = Math.random() * 100;
    } else {
      (<Point>creature).y = Math.random() * 100;
    }

    return creature;
  }
}

class CrossoverOperator implements ICrossoverOperator {

  execute(a:ICreature, b:ICreature) : ICreaturePair {
    var pair:ICreaturePair = {
      creature1: a.clone(),
      creature2: b.clone()
    };
    var rand = Math.random();

    if (rand > 0.5) {
      (<Point>pair.creature1).x = (<Point>b).x;
      (<Point>pair.creature2).x = (<Point>a).x;
    } else {
      (<Point>pair.creature1).y = (<Point>b).y;
      (<Point>pair.creature2).y = (<Point>a).y;
    }

    return pair;
  }

}

var perfectSolution = new Point();
perfectSolution.x = 50;
perfectSolution.y = 50;

class FitnessFunction implements IFitnessFunction {
  execute(creature:ICreature) : number {
    var distance = Math.sqrt(
      Math.pow(perfectSolution.x - (<Point>creature).x, 2) + 
      Math.pow(perfectSolution.y - (<Point>creature).y, 2));

    return 1/distance;
  }
}

var ga = new GeneticAlgorithm({
  mutationOperator: new MutationOperator(),
  crossoverOperator: new CrossoverOperator(),
  fitnessFunction: new FitnessFunction(),
  creatureBuilder: new CreatureBuilder(),
  crossoverProbability: 0.6,
  mutationProbability: 0.1,
  populationSize: 750,
  iterations: 2000,
  ntour: 2
});


var time = process.hrtime();
var solution = ga.run();
console.log('TIME', process.hrtime(time)[1] * 1e-6);

console.log(solution);