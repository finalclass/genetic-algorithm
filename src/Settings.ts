/// <reference path="interfaces.d.ts" />

class Settings implements ISettings {
  public mutationOperator:IMutationOperator;
  public crossoverOperator:ICrossoverOperator;
  public creatureBuilder:ICreatureBuilder;
  public fitnessFunction:IFitnessFunction;

  constructor(options?:ISettings) {
    if (options) {
      this.mutationOperator = options.mutationOperator;
      this.crossoverOperator = options.crossoverOperator;
      this.creatureBuilder = options.creatureBuilder;
      this.fitnessFunction = options.fitnessFunction;
      this.iterations = options.iterations;
      this.mutationProbability = options.mutationProbability;
      this.crossoverProbability = options.crossoverProbability;
      this.populationSize = options.populationSize;
    }
  }

  // -----------------------------------------------------
  // 
  // Getters / Setters
  //
  // -----------------------------------------------------

  // ---------------------------
  // ntour
  // ---------------------------
  private _ntour:number;

  public get ntour() : number {
    return this._ntour;
  }

  public set ntour(val:number) {
    if (val < 2) {
      val = 2;
    }
    this._ntour = val;
  }

  // ---------------------------
  // iterations
  // ---------------------------
  
  private _iterations:number;

  public get iterations() : number {
    return this._iterations;
  }

  public set iterations(iterations:number) {
    if (iterations < 1) {
      iterations = 1;
    }
    this._iterations = iterations;
  }

  // ---------------------------
  // mutationProbability
  // ---------------------------

  private _mutationProbability:number;

  public get mutationProbability() : number {
    return this._mutationProbability;
  }

  public set mutationProbability(probability:number) {
    if (probability > 1) {
      probability = 1;
    } else if (probability < 0) {
      probability = 0;
    }
    this._mutationProbability = probability;
  }


  // ---------------------------
  // corssoverProbability
  // ---------------------------

  private _crossoverProbability:number;

  public get crossoverProbability() : number {
    return this._crossoverProbability;
  }

  public set crossoverProbability(probability:number) {
    if (probability > 1) {
      probability = 1;
    } else if (probability < 0) {
      probability = 0;
    }
    this._crossoverProbability = probability;
  }

  // ---------------------------
  // populationSize
  // ---------------------------

  private _populationSize:number;

  public get populationSize() : number {
    return this._populationSize;
  }

  public set populationSize(populationSize:number) {
    if (populationSize < 1) {
      populationSize = 1;
    }
    this._populationSize = populationSize;
  }
  

}

export = Settings;