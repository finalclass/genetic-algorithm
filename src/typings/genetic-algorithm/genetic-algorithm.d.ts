/// <reference path="../node/node.d.ts" />
/// <reference path="interfaces.d.ts" />

declare module "genetic-algorithm" {

  export class GeneticAlgorithm {
    private settings;
    private evolver;
    constructor(options: ISettings);
    public run(): ICreature;
  }

  export interface ICreature {
    clone() : ICreature;
    randomize() : void;
    score:number;
  }

  export interface ICreaturePair {
    creature1:ICreature;
    creature2:ICreature;
  }

  export interface IRandomizer {
    random() : number;
    randomInt(max:number) : number;
    randomBetween(from:number, to:number, step:number) : number;
  }

  export interface ICreatureBuilder {
    execute() : ICreature;
  }

  export interface IFitnessFunction {
    execute(creature:ICreature) : number;
  }

  export interface IMutationOperator {
    execute(creature:ICreature) : ICreature;
  }

  export interface ICrossoverOperator {
    execute(a:ICreature, b:ICreature) : ICreaturePair;
  }

  export interface IEvolver {
    evolve() : ICreature;
  }

  export interface IPreselection {
    preselect(population:IPopulation) : IPopulation;
  }

  export interface IPopulation {
    creatures:ICreature[];
    findBest():ICreature;
  }

  export interface ISettings {
    mutationOperator:IMutationOperator;
    crossoverOperator:ICrossoverOperator;
    creatureBuilder:ICreatureBuilder;
    fitnessFunction:IFitnessFunction;
    populationSize:number;
    iterations:number;
    mutationProbability:number;
    crossoverProbability:number;
    ntour:number;
  }

  class Evolver implements IEvolver {
    private settings;
    private preselection;
    private populationCrossover;
    private populationMutation;
    constructor(settings: ISettings);
    public evolve(): ICreature;
    private populate(population);
    private calculateFitness(population);
  }

  class Population implements IPopulation {
    public size: number;
    constructor();
    public findBest(): ICreature;
    public creatures: ICreature[];
  }

  class PopulationCrossover {
    private crossoverOperator;
    private crossoverProbability;
    private randomizer;
    constructor(crossoverOperator: ICrossoverOperator, crossoverProbability: number, randomizer?: IRandomizer);
    public crossover(population: IPopulation): IPopulation;
  }

  class PopulationMutation {
    private mutationOperator;
    private mutationProbability;
    private randomizer;
    constructor(mutationOperator: IMutationOperator, mutationProbability: number, randomizer?: Randomizer);
    public mutate(population: IPopulation): IPopulation;
  }

  class Randomizer implements IRandomizer {
    public random: () => number;
    constructor(random?: () => number);
    public randomInt(max: number): number;
    public randomBetween(from: number, to: number, step: number): number;
  }

  class Settings implements ISettings {
    public mutationOperator: IMutationOperator;
    public crossoverOperator: ICrossoverOperator;
    public creatureBuilder: ICreatureBuilder;
    public fitnessFunction: IFitnessFunction;
    constructor(options?: ISettings);
    private _ntour;
    public ntour : number;
    private _iterations;
    public iterations : number;
    private _mutationProbability;
    public mutationProbability : number;
    private _crossoverProbability;
    public crossoverProbability : number;
    private _populationSize;
    public populationSize : number;
  }

  class TournamentPreselection implements IPreselection {
    private creatureBuilder;
    private ntour;
    private randomizer;
    constructor(creatureBuilder: ICreatureBuilder, ntour?: number, randomizer?: IRandomizer);
    public preselect(population: IPopulation): IPopulation;
    private getMaxPositionInArray(array);
  }
}

