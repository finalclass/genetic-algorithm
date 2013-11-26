/// <reference path="../../src/node.d.ts"/>
/// <reference path="../../src/interfaces.d.ts"/>

import GeneticAlgorithm = require('../../src/GeneticAlgorithm');

var NUMBER_OF_NUMBERS:number = 100;

var randNum = () => Math.random() * 100;

class Creature implements ICreature {
  public score:number;
  public numbers:number[];

  constructor() {
    this.score = 0;

    this.numbers = new Array(NUMBER_OF_NUMBERS);

    for (var i = 0; i < NUMBER_OF_NUMBERS; i += 1) {
      this.numbers[i];
    }
  }

  public clone() : ICreature {
    var point = new Creature();
    point.numbers = this.numbers.slice(0);
    return point;
  }

  public randomize() : void {
    for (var i = 0; i < NUMBER_OF_NUMBERS; i += 1) {
      this.numbers[i] = randNum();
    } 
  }
}

class CreatureBuilder implements ICreatureBuilder {
  execute() : ICreature {
    return new Creature();
  }
}

class MutationOperator implements IMutationOperator {
  execute(creature:ICreature) : ICreature {
    var rand = Math.random();
    var gene = Math.floor(Math.random() * NUMBER_OF_NUMBERS);

    (<Creature>creature).numbers[gene] = randNum();

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
    var crossPoint = Math.floor(Math.random() * NUMBER_OF_NUMBERS);

    for (var i = 0; i < NUMBER_OF_NUMBERS; i += 1) {
      if (i < crossPoint) {
        (<Creature>pair.creature1).numbers[i] = (<Creature>b).numbers[i];
      } else {
        (<Creature>pair.creature2).numbers[i] = (<Creature>a).numbers[i];
      }
    }

    return pair;
  }

}

var perfectSolution = new Creature();
for (var i = 0; i < NUMBER_OF_NUMBERS; i += 1) {
  perfectSolution.numbers[i] = 50;
}

class FitnessFunction implements IFitnessFunction {
  execute(creature:ICreature) : number {
    var sumOfPowers:number = 0;

    for (var i = 0; i < NUMBER_OF_NUMBERS; i += 1) {
      sumOfPowers += Math.pow(perfectSolution.numbers[i] - (<Creature>creature).numbers[i], 2);
    }

    return 1 / Math.sqrt(sumOfPowers);
  }
}

var ga = new GeneticAlgorithm({
  mutationOperator: new MutationOperator(),
  crossoverOperator: new CrossoverOperator(),
  fitnessFunction: new FitnessFunction(),
  creatureBuilder: new CreatureBuilder(),
  crossoverProbability: 0.6,
  mutationProbability: 0.3,
  populationSize: 200,
  iterations: 300
});


var time = process.hrtime();
var solution = ga.run();
console.log('TIME', process.hrtime(time)[1] * 1e-6);

console.log(solution);