/// <reference path="node.d.ts" />
/// <reference path="interfaces.d.ts" />
var Randomizer = require('./Randomizer');
var Population = require('./Population');

var PopulationMutation = (function () {
    function PopulationMutation(mutationOperator, mutationProbability, randomizer) {
        if (typeof randomizer === "undefined") { randomizer = new Randomizer(); }
        this.mutationOperator = mutationOperator;
        this.mutationProbability = mutationProbability;
        this.randomizer = randomizer;
    }
    PopulationMutation.prototype.mutate = function (population) {
        var nextGeneration = new Population();

        for (var p = 0; p < population.creatures.length; p += 1) {
            var creature = population.creatures[p];
            var rand = this.randomizer.random();
            var mutated;

            if (rand < this.mutationProbability) {
                nextGeneration.creatures.push(this.mutationOperator.execute(creature));
            } else {
                nextGeneration.creatures.push(creature.clone());
            }
        }

        return nextGeneration;
    };
    return PopulationMutation;
})();


module.exports = PopulationMutation;

