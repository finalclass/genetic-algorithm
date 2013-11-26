/// <reference path="node.d.ts" />
/// <reference path="interfaces.d.ts"/>
var TournamentPreselection = require('./operators/TournamentPreselection');

var Population = (function () {
    function Population(creatureBuilder, populationSize) {
        this.creatureBuilder = creatureBuilder;
        this.preselection = new TournamentPreselection(this.creatureBuilder);
        this.size = populationSize;
    }
    Population.prototype.populate = function () {
        for (var i = 0; i < this.size; i += 1) {
            this.creatures.push(this.creatureBuilder.execute());
        }
    };

    Population.prototype.preselect = function () {
        return this.preselection.preselect(this);
    };
    return Population;
})();


module.exports = Population;

