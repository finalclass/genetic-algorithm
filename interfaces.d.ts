interface ICreature {
  
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