/// <reference path="typings/node/node.d.ts" />
/// <reference path="typings/genetic-algorithm/interfaces.d.ts" />
var Randomizer = require('./Randomizer');
var Population = require('./Population');
var TournamentPreselection = (function () {
    function TournamentPreselection(creatureBuilder, ntour, randomizer) {
        if (ntour === void 0) { ntour = 2; }
        if (randomizer === void 0) { randomizer = new Randomizer(); }
        this.creatureBuilder = creatureBuilder;
        this.ntour = ntour;
        this.randomizer = randomizer;
    }
    TournamentPreselection.prototype.preselect = function (population) {
        var nextGeneration = new Population();
        for (var p = 0; p < population.creatures.length; p += 1) {
            var fitness = [];
            var tours = [];
            for (var t = 0; t < this.ntour; t += 1) {
                var random1 = this.randomizer.random();
                var s = Math.floor(random1 * population.creatures.length); //tu podłoga
                tours.push(s);
                fitness[t] = population.creatures[s].score;
            }
            //wyłoń numer zwycięzcy
            var lok = this.getMaxPositionInArray(fitness);
            //zapisz zwycięzcę
            nextGeneration.creatures.push(population.creatures[tours[lok]].clone());
        }
        return nextGeneration;
    };
    TournamentPreselection.prototype.getMaxPositionInArray = function (array) {
        var max = array[0];
        var maxPosition = 0;
        for (var i = 0; i < array.length; i += 1) {
            if (array[i] > max) {
                max = array[i];
                maxPosition = i;
            }
        }
        return maxPosition;
    };
    return TournamentPreselection;
})();
module.exports = TournamentPreselection;
//# sourceMappingURL=TournamentPreselection.js.map