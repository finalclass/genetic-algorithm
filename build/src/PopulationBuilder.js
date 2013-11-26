/// <reference path="node.d.ts" />
/// <reference path="interfaces.d.ts" />
var PopulationBuilder = (function () {
    function PopulationBuilder(creatureBuilder, populationSize) {
        this.creatureBuilder = creatureBuilder;
        this.populationSize = populationSize;
    }
    PopulationBuilder.prototype.buildNewPopulation = function () {
        var population = [];

        for (var i = 0; i < this.populationSize; i += 1) {
            population.push(this.cre);
        }

        return population;
    };
    return PopulationBuilder;
})();


module.exports = PopulationBuilder;

