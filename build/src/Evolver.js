/// <reference path="typings/node/node.d.ts" />
/// <reference path="typings/genetic-algorithm/interfaces.d.ts" />
var Population = require('./Population');
var TournamentPreselection = require('./TournamentPreselection');
var PopulationCrossover = require('./PopulationCrossover');
var PopulationMutation = require('./PopulationMutation');

var Evolver = (function () {
    function Evolver(settings) {
        this.settings = settings;
        this.preselection = new TournamentPreselection(settings.creatureBuilder, settings.ntour);
        this.populationCrossover = new PopulationCrossover(settings.crossoverOperator, settings.crossoverProbability);
        this.populationMutation = new PopulationMutation(settings.mutationOperator, settings.mutationProbability);
    }
    Evolver.prototype.evolve = function () {
        var population = new Population();

        this.populate(population);

        for (var i = this.settings.iterations; i--;) {
            this.calculateFitness(population);
            population = this.preselection.preselect(population);
            population = this.populationCrossover.crossover(population);
            population = this.populationMutation.mutate(population);
            this.settings.onIteration(i);
        }

        return population.findBest();
    };

    Evolver.prototype.populate = function (population) {
        var builder = this.settings.creatureBuilder;
        var creatures = population.creatures;

        for (var i = this.settings.populationSize; i--;) {
            var creature = builder.execute();
            creature.randomize();
            creatures.push(creature);
        }
    };

    Evolver.prototype.calculateFitness = function (population) {
        var creatures = population.creatures;
        var len = creatures.length;
        var fitness = this.settings.fitnessFunction;

        for (var i = 0; i < len; i += 1) {
            var creature = creatures[i];
            creature.score = fitness.execute(creature);
        }
    };
    return Evolver;
})();

module.exports = Evolver;
