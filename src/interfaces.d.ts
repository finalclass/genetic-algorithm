interface ICreature {
  clone() : ICreature;
  score:number;
}

interface IRandomizer {
  random() : number;
  randomInt(max:number) : number;
  randomBetween(from:number, to:number, step:number) : number;
}

interface ICreatureBuilder {
  execute() : ICreature;
}

interface ICrossoverOperator {
  execute(a:any, b:any) : ICreature;
}

interface IFitnessFunction {
  execute(creature:any) : number;
}

interface IMutationOperator {
  execute(creature:ICreature) : void;
}

interface IEvolver {
  evolve() : any
}

interface IPreselection {
  preselect(population:IPopulation) : IPopulation;
}

interface IPopulation {
  populate() : void;
  preselect() : IPopulation;
  size:number;
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