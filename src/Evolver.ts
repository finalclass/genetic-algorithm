/// <reference path="node.d.ts" />
/// <reference path="interfaces.d.ts" />

import Population = require('./Population');
import TournamentPreselection = require('./TournamentPreselection');
import PopulationCrossover = require('./PopulationCrossover');
import PopulationMutation = require('./PopulationMutation');

class Evolver implements IEvolver {

  private preselection:IPreselection;
  private populationCrossover:PopulationCrossover;
  private populationMutation:PopulationMutation;

  constructor(private settings:ISettings) {
    this.preselection = new TournamentPreselection(settings.creatureBuilder);
    this.populationCrossover = new PopulationCrossover(
      settings.crossoverOperator,
      settings.crossoverProbability);
    this.populationMutation = new PopulationMutation(
      settings.mutationOperator,
      settings.mutationProbability);
  }

  public evolve() {
    var population:IPopulation = new Population();

    this.populate(population);
    
    for (var i = this.settings.iterations; i --;) {
      this.calculateFitness(population);
      population = this.preselection.preselect(population);
      population = this.populationCrossover.crossover(population);
      population = this.populationMutation.mutate(population);
    }

    return population.findBest();
  }

  private populate(population) : void {
    var builder = this.settings.creatureBuilder;
    var creatures = population.creatures;

    for (var i = this.settings.populationSize; i--;) {
      var creature:ICreature = builder.execute();
      creature.randomize();
      creatures.push(creature);
    }
  }

  private calculateFitness(population:IPopulation) : void {
    var creatures:ICreature[] = population.creatures;
    var len:number = creatures.length;
    var fitness:IFitnessFunction = this.settings.fitnessFunction;

    for (var i = 0; i < len; i += 1) {
      var creature:ICreature = creatures[i];
      creature.score = fitness.execute(creature);
    }
  }

}

export = Evolver;