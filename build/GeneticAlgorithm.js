/// <reference path="node.d.ts" />
/// <reference path="interfaces.d.ts" />
var Settings = require("./Settings");

var GeneticAlgorithm = (function () {
    function GeneticAlgorithm(options) {
        if (!(options instanceof Settings)) {
            options = new Settings(options);
        }

        this.settings = options;
    }
    GeneticAlgorithm.prototype.run = function () {
    };
    return GeneticAlgorithm;
})();


module.exports = GeneticAlgorithm;

