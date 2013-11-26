/// <reference path="node.d.ts" />
/// <reference path="interfaces.d.ts" />
var Settings = require("./Settings");
var Evolver = require("./Evolver");

var GeneticAlgorithm = (function () {
    function GeneticAlgorithm(options) {
        if (!(options instanceof Settings)) {
            options = new Settings(options);
        }

        this.settings = options;
        this.evolver = new Evolver(this.settings);
    }
    GeneticAlgorithm.prototype.run = function () {
        return this.evolver.evolve();
    };
    return GeneticAlgorithm;
})();


module.exports = GeneticAlgorithm;

