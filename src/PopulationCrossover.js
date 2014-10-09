/// <reference path="typings/node/node.d.ts" />
/// <reference path="typings/genetic-algorithm/interfaces.d.ts" />
var Population = require('./Population');
var Randomizer = require('./Randomizer');
var PopulationCrossover = (function () {
    function PopulationCrossover(crossoverOperator, crossoverProbability, randomizer) {
        if (randomizer === void 0) { randomizer = new Randomizer(); }
        this.crossoverOperator = crossoverOperator;
        this.crossoverProbability = crossoverProbability;
        this.randomizer = randomizer;
    }
    PopulationCrossover.prototype.crossover = function (population) {
        var nextGeneration = new Population();
        var children;
        for (var p = 0; p < population.creatures.length - 1; p += 2) {
            var parent1 = population.creatures[p];
            var parent2 = population.creatures[p + 1];
            var rand = this.randomizer.random();
            if (this.crossoverProbability < rand) {
                children = this.crossoverOperator.execute(parent1, parent2);
            }
            else {
                children = {
                    creature1: parent1.clone(),
                    creature2: parent2.clone()
                };
            }
            nextGeneration.creatures.push(children.creature1);
            nextGeneration.creatures.push(children.creature2);
        }
        //if population size is an odd number
        if (nextGeneration.creatures.length < population.creatures.length) {
            //add last individual from the previous population
            nextGeneration.creatures.push(population.creatures[population.creatures.length - 1]);
        }
        return nextGeneration;
    };
    return PopulationCrossover;
})();
module.exports = PopulationCrossover;
//# sourceMappingURL=PopulationCrossover.js.map