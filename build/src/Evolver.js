/// <reference path="node.d.ts" />
/// <reference path="interfaces.d.ts" />
var Population = require('./Population');

var Evolver = (function () {
    function Evolver(settings) {
        this.settings = settings;
    }
    Evolver.prototype.evolve = function () {
        var population = new Population(this.settings.creatureBuilder, this.settings.populationSize);

        population.populate();

        for (var i = 0; i < this.settings.iterations; i += 1) {
            population = population.preselect();
        }
    };
    return Evolver;
})();


module.exports = Evolver;

