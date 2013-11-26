interface ICreature {
  clone() : ICreature;
  randomize() : void;
  score:number;
}

interface ICreaturePair {
  creature1:ICreature;
  creature2:ICreature;
}

interface IRandomizer {
  random() : number;
  randomInt(max:number) : number;
  randomBetween(from:number, to:number, step:number) : number;
}

interface ICreatureBuilder {
  execute() : ICreature;
}

interface IFitnessFunction {
  execute(creature:ICreature) : number;
}

interface IMutationOperator {
  execute(creature:ICreature) : ICreature;
}

interface ICrossoverOperator {
  execute(a:ICreature, b:ICreature) : ICreaturePair;
}

interface IEvolver {
  evolve() : ICreature;
}

interface IPreselection {
  preselect(population:IPopulation) : IPopulation;
}

interface IPopulation {
  findBest() : ICreature;
  creatures:ICreature[];
}

interface ISettings {
  mutationOperator:IMutationOperator;
  crossoverOperator:ICrossoverOperator;
  creatureBuilder:ICreatureBuilder;
  fitnessFunction:IFitnessFunction;
  populationSize:number;
  iterations:number;
  mutationProbability:number;
  crossoverProbability:number;
}