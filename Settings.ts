/// <reference path="IFitnessFunction" />
/// <reference path="ICreature.ts" />
/// <reference path="IMutationOperator.ts" />
/// <reference path="ICrossoverOperator.ts" />
/// <reference path="ICreatureBuilder.ts" />

class Settings {
  public mutationOperator:IMutationOperator;
  public crossoverOperator:ICrossoverOperator;
  public creatureBuilder:ICreatureBuilder;
  public fitnessFunction:IFitnessFunction;

  constructor() {

  }

  // -----------------------------------------------------
  // 
  // Getters / Setters
  //
  // -----------------------------------------------------

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

  private _corssoverProbability:number;

  public get corssoverProbability() : number {
    return this._corssoverProbability;
  }

  public set corssoverProbability(probability:number) {
    if (probability > 1) {
      probability = 1;
    } else if (probability < 0) {
      probability = 0;
    }
    this._corssoverProbability = probability;
  }

}

export = Settings;